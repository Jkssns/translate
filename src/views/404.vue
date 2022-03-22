<template>
    <div class="error">
        <h1>你以为你是哥伦布，还想发现个新大陆？</h1>
        <h1>脑袋给你敲个洞</h1>
        <h1>快退出去正常浏览</h1>
        <header>
            <h1 class="xixi">你<img src="@/assets/h.jpg" alt="" />妈</h1>
        </header>
    </div>
</template>


<script>
export default {
    data() {
        return {
            description: '404页面',
        }
    },
    created() {},
    methods: {},
}
</script>


<style scoped>
div,
h1,
img {
    margin: 0;
    padding: 0;
}
.error {
    text-align: center;
}
.xixi {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}
img {
    width: 50%;
}
</style>