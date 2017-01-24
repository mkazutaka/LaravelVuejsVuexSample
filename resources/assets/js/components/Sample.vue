<template>
    <div>
        <div>HelloWorld</div>
        {{ response_contents }}
        <div v-if="receive_response"> Thank you! </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import {TOGGLE_STATE, SEND_REQUEST} from '../store/mutation-types';

    export default{
        mounted: function() {
            this.SEND_REQUEST('/api/sample');
            console.log(this.receive_response);
        },
        computed: {
            ...mapState('sample', [
                'receive_response',
                'response_contents',
            ]),
        },
        methods: {
            ...mapActions('sample', [
                TOGGLE_STATE,
                SEND_REQUEST,
            ])
        }
    }
</script>
