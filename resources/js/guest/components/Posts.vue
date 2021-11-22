<template>
    <section>
        <h2>Ttti i post</h2>
        <ul>
            <li v-for="post in posts" :key="post.id"> {{post.title}}</li>
        </ul>
    </section>
</template>

<script>
export default {
    name:'Posts',
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