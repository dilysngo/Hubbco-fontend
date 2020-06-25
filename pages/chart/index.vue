
<template>
    <div class="key-word-chart">
        <key-word-trend :data="data" />
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
import KeyWordTrend from '~/components/charts/KeyWordTrend';
export default {
    components: {KeyWordTrend},
    data: () => ({
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
            ]
        }
    }),
    computed: {
        ...mapGetters({
            chart: 'chart'
        })
    },
    methods: {
        ...mapActions([
            'getKeyWordsTrend'
        ])
    }
};
</script>

<style lang="scss">
.key-word-chart {
    margin: 20px 0 0 20px;
    background-color: #f5f5f5;
    width: 25%;
}
</style>
