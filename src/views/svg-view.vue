<template>
    <div class="svg_wrapper">
        <section class="svg_edit" :style="{width: width + 'px'}" :contenteditable="true" @input="onInput"></section>

        <div class="svg_solid" @mousedown="onMouseDown"></div>

        <section class="svg_view">
            <div class="svg_mask"></div>
            <!-- <iframe class="iframe" width="100%" height="100%" :srcdoc="htmlStr" frameborder="0"></iframe> -->
        </section>
    </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
const htmlStr = ref('')
const isPress = ref(false)
const width = ref(0)

const onInput = (e: any) => {
    htmlStr.value = e.target.innerHTML
}


const onMouseDown = (e) => {
    isPress.value = true
    document.addEventListener('mousemove', mouseMove)
}

const mouseMove = (e) => {
    if (isPress.value) {
        console.log("e.layerX::: ", e.layerX);
        width.value = e.layerX
    }
}

document.addEventListener('click', (e) => {
    document.removeEventListener('mousemove', mouseMove)
    isPress.value = false
})




</script>

<style lang="scss" scoped>
.svg_wrapper {
	display: flex;
    width: 100%;
    height: 100%;
    .svg_edit {
		display: inline-block;
		min-width: 200px;
        width: 49%;
        height: 100%;
        overflow: scroll;
        padding: 10px;
        box-sizing: border-box;
        outline: none;
        &::-webkit-scrollbar {
			height: 100px;
        }
		&::-webkit-resizer {
			background: red;
		}
    }
    .svg_solid {
        width: 0.1%;
        height: calc(100% - 20px);
        margin-top: 10px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        background: #afafaf;
        cursor: e-resize;
    }
    .svg_view {
        flex: 1;
        min-width: 200px;
		height: 100%;
        .svg_mask {
            width: 100%;
            height: 100%;
            background: grey;
        }
        .iframe {
            float: right;
        }
    }

    iframe :deep(body) {
        // word-break: break-word;
    }
}
</style>