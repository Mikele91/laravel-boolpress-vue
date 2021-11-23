<template>
    <div class="post">
        <h4>{{data.title}}</h4>
        <p>{{data.content}}</p>
    </div>
</template>


<script>
export default {
    name:"PostCard",
    props:{
        data: Object
    }
}
</script>


<style lang="scss" scoped>
    .post{
            width: calc((100% / 3) - 1rem );
            padding: 1.25rem;
            margin:.3125rem;
            margin-block: .3125rem;

        h4{
            color: rgba(255, 166, 0, 0.753);
        }
        background-color:rgb(36, 32, 32) ;
        
        color: white;
       
    
        
    }
</style>