import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';
import Platformer from './pages/platformer.js';

export default [
    { path: '/', component: List },
    { path: '/platformer', component: Platformer },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];