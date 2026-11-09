import { fetchPlatformerList } from "../content.js";

export default {
    data: () => ({
        list: [],
        loading: true,
    }),

    template: `
        <main>
            <h1>Platformer List</h1>
            <p v-if="loading">Loading...</p>
            <ul v-else>
                <li v-for="([level, err], i) in list">
                    {{ level?.name || err }}
                </li>
            </ul>
        </main>
    `,

    async mounted() {
        this.list = await fetchPlatformerList() || [];
        this.loading = false;
    },
};