<template>
    <div ref="page">

    </div>
</template>

<script>
import {getNewsById} from '@/api/api'
export default {
    name:'Page',
    data(){
        return {

        }
    },
    beforeCreate(){
        let id = this.$route.params.id;
        getNewsById(id).then(res=>{
            this.$refs.page.innerHTML = res.body
        })
    },
    created(){
    }
}
</script>

<style>

</style>
