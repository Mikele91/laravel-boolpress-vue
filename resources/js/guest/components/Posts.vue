<template>
    <section>
        <h2>Tutti i post</h2>
        <div class="posts">
            <PostCard v-for="post in posts" :key="post.id" :data ="post"/>
        </div>
    </section>
</template>

<script>
import PostCard from './PostCard.vue';
export default {
    name:'Posts',
    components:{
        PostCard
    },
    data(){
        return{
            posts:[],
        }
    },
    mounted(){
        axios.get('/api/posts')
        .then((response)=>{
            this.posts=response.data.data;

        })
        // stampa errori chiamata in console 
        .catch((error) => {
            console.log(error);
        })
    }
}
</script>



<style lang="scss" scoped>
    section{
        
       background-color: black;
       h2{
           color: rgb(255, 123, 0);
           text-align: center;
       }
        .posts{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 1200px;
            margin :auto
        }
        
    }
</style>