<template>
  <div class="todo__show-container">
    <div class="todo__show-subContainer">
      <div class="todo__show-importance">
        <div
          class="body"
          :style="
            item.importance === 'high'
              ? { backgroundColor: 'red' }
              : item.importance === 'medium'
              ? { backgroundColor: 'orange' }
              : item.importance === 'low'
              ? { backgroundColor: 'green' }
              : {}
          "
        ></div>
      </div>
      <p class="header" @click="toggleDescription = !toggleDescription">
        {{ item.task }}
      </p>
      <div class="todo__show-date">
        <p class="body">{{ formattedDate }}</p>
        <p class="body">{{ timeDistance }}</p>
      </div>

      <div class="todo__show-icon">
        <span
          class="material-symbols-outlined"
          v-if="item.completed"
          @click="handleCompletedToggle"
        >
          done
        </span>
        <span
          class="material-symbols-outlined"
          v-if="!item.completed"
          @click="handleCompletedToggle"
        >
          close
        </span>
        <span class="material-symbols-outlined" @click="handleDelete">
          delete
        </span>
      </div>
    </div>
    <p class="body" :style="!toggleDescription ? { display: 'none' } : {}">
      {{ item.description }}
    </p>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { format, formatDistance } from "date-fns";
import useEditDoc from "@/composables/todo/useEditDoc";
import useDeleteDoc from "@/composables/todo/useDeleteDoc";
export default {
  props: { item: Object },
  setup(props) {
    const toggleDescription = ref(false);
    const formattedDate = ref("");
    const timeDistance = ref("");
    const { editDoc } = useEditDoc();
    const { deleteDoc } = useDeleteDoc();
    const itemCopy = reactive({ ...props.item });

    const handleCompletedToggle = () => {
      itemCopy.completed = !itemCopy.completed;
      editDoc(itemCopy.id, itemCopy);
    };

    const handleDelete = () => {
      deleteDoc(itemCopy.id);
    };

    if (props.item.completedBy) {
      try {
        formattedDate.value = format(
          new Date(props.item.completedBy),
          "dd-MMMM-yy"
        );
        timeDistance.value = formatDistance(
          new Date(),
          new Date(props.item.completedBy)
        );
      } catch (error) {
        console.error("Invalid date:", props.item.completedBy);
      }
    }
    return {
      toggleDescription,
      formattedDate,
      timeDistance,
      handleCompletedToggle,
      handleDelete,
    };
  },
};
</script>

<style>
</style>