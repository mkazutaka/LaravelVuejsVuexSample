<template>
    <div>
        <div>HelloWorld</div>
        {{ this.responseContents }}
        <div v-if="this.receiveResponse"> Thank you! </div>
    </div>
</template>

<script>
    import {TOGGLE_STATE, SEND_REQUEST} from '../store/mutation-types';
    export default{
        mounted: function() {
            console.log(this.responseContents)
            this.$store.dispatch(SEND_REQUEST, '/api/vuex')
        },
        computed: {
            receiveResponse(){
                return this.$store.getters.receiveResponse
            },
            responseContents(){
                return this.$store.getters.responseContents
            }
        }
    }
</script>
