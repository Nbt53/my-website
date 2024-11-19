<template>
  <div class="widget">
    <div class="football-widget">
      <h3>Premier League Table</h3>
      <div v-if="loadingTable">
        <p>Loading table...</p>
      </div>
      <div v-else>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="team in standings" :key="team.team.id">
              <td>{{ team.position }}</td>
              <td>{{ team.team.name }}</td>
              <td>{{ team.points }}</td>
            </tr>
          </tbody> 
        </table>
      </div>

      <h3>Upcoming Matches for Manchester City</h3>
      <div v-if="loadingMatches">
        <p>Loading matches...</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="match in matches" :key="match.id">
            {{ match.utcDate }} - {{ match.homeTeam.name }} vs {{ match.awayTeam.name }}
          </li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const apiKey = '06596c05bf7d475a9c54720a24d0a0a6';
    const loadingTable = ref(true);
    const loadingMatches = ref(true);
    const standings = ref([]);
    const matches = ref([]);

    const fetchStandings = async () => {
      const url = `https://api.football-data.org/v4/competitions/PL/standings`;
      try {
        const response = await axios.get(url, {
          headers: { 'X-Auth-Token': apiKey },
        });
        standings.value = response.data.standings[0].table;
      } catch (error) {
        console.error('Error fetching standings:', error);
      } finally {
        loadingTable.value = false;
      }
    };

    const fetchMatches = async () => {
      const url = `https://api.football-data.org/v4/teams/65/matches?status=SCHEDULED`;
      try {
        const response = await axios.get(url, {
          headers: { 'X-Auth-Token': apiKey },
        });
        matches.value = response.data.matches;
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        loadingMatches.value = false;
      }
    };

    onMounted(() => {
      fetchStandings();
      fetchMatches();
    });

    return { loadingTable, loadingMatches, standings, matches };
  },
};
</script>

<style>
.football-widget {
  text-align: center;
}
.football-widget table {
  width: 100%;
  border-collapse: collapse;
}
.football-widget th, .football-widget td {
  border: 1px solid #ddd;
  padding: 8px;
}
.football-widget th {
  background-color: #f2f2f2;
}
</style>