<template>
  <div class="create-portfolio">
    <form class="form form__portfolio" @submit.prevent="handleSubmit">
      <h3>Create Portfolio</h3>

      <input type="text" placeholder="Title" v-model="title" />
      <textarea type="text" placeholder="Description" v-model="description">
      </textarea>
      <input type="text" placeholder="Slug" v-model="slug" />
      <p class="error" v-if="slugError">{{ slugError }}</p>
      <input type="text" placeholder="Category" v-model="category" />
      <input type="text" placeholder="Website Url" v-model="viewUrl" />
      <input type="text" placeholder="Git Url" v-model="gitUrl" />
      <input
        type="text"
        placeholder="Technologies"
        v-model="technology"
        @keydown.enter.prevent="addListItem"
      />
      <div class="form__list" v-if="technologies.length">
        <div
          class="form__list-item"
          v-for="(tech, index) in technologies"
          :key="index"
        >
          <p @click="removeListItem">{{ tech }}</p>
        </div>
      </div>
      <div class="">
        <label for="image">
          <p>Upload Photos</p>
        </label>
        <input
          type="file"
          name="image"
          @change="imageChange"
          accept="image/*"
          multiple
        />
      </div>
      <div class="form__thumbnails" v-if="imageUrls.length">
        <div
          class="form__thumbnail"
          v-for="(url, index) in imageUrls"
          :key="index"
        >
          <img :src="url" alt="" @click="removeUrl" />
        </div>
      </div>
      <div class="div">
        <p><span>completed?</span></p>
        <input type="checkbox" v-model="completed" />
      </div>
      <div v-if="error || portfolioError">
        <p class="error" v-if="error">error: {{ error }}</p>
        <p class="error" v-if="portfolioError">
          upload error: {{ portfolioError }}
        </p>
      </div>
      <button class="button button__regular">Create</button>
    </form>
  </div>
</template>

<script>
import UseUploadPortfolio from "@/composables/UseUploadPortfolio";
import getSlugs from "@/composables/getSlugs";
import useListAdd from "@/composables/useListAdd";
import useListRemove from "@/composables/useListRemove";
import useSlugValidation from "@/composables/useSlugValidation";
import { timestamp } from "@/firebase/config";
import { onMounted, ref, watch } from "vue";
export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const slug = ref("");
    const images = ref([]);
    const viewUrl = ref("");
    const gitUrl = ref("");
    const technology = ref("");
    const technologies = ref([]);
    const category = ref("");
    const completed = ref(false);
    const { ListAdd } = useListAdd();
    const { ListRemove } = useListRemove();
    const { UploadPortfolio, portfolioError } = UseUploadPortfolio();
    const { slugValidation, slugError } = useSlugValidation();
    const imageUrls = ref([]);
    const loading = ref(false);
    const slugs = ref([]);

    onMounted(async () => {
      try {
        const result = await getSlugs();
        slugs.value = result.value;
      } catch (error) {
        console.error("Failed to fetch slugs:", error);
      }
    });

    const addListItem = () => {
      ListAdd(technology, technologies);
    };

    const removeListItem = (e) => {
      ListRemove(technologies, e.target.innerText);
    };

    const imageChange = (e) => {
      Array.from(e.target.files).map((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          imageUrls.value.push(event.target.result);
        };
        reader.readAsDataURL(file);
      });
    };

    const removeUrl = (e) => {
      imageUrls.value = imageUrls.value.filter((url) => url !== e.target.src);
    };

    watch(slug, async (value) => {
      slugValidation(value, slugs);
    });

    const handleSubmit = async (e) => {
      loading.value = true;
      const portfolio = {
        title: title.value,
        description: description.value,
        slug: slug.value,
        images: imageUrls.value,
        completed: completed.value,
        viewUrl: viewUrl.value,
        category: category.value,
        gitUrl: gitUrl.value,
        technologies: technologies.value,
        createdAt: timestamp(),
      };
      await UploadPortfolio(portfolio);
      loading.value = false;
    };

    return {
      imageChange,
      title,
      description,
      slug,
      category,
      completed,
      viewUrl,
      gitUrl,
      images,
      technology,
      technologies,
      addListItem,
      removeListItem,
      imageUrls,
      removeUrl,
      handleSubmit,
      portfolioError,
      slugError,
    };
  },
};
</script>

<style>
</style>