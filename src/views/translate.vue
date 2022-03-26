<template>
    <div class="trans">
        <!-- 标题 -->
        <header>
            <h1>肥宅翻译</h1>
        </header>

        <!-- 翻译区域 -->
        <section>
            <input type="text" style="padding-left: 10px" placeholder="多个单词请以空格隔开" v-model="val" />
            <select @change="changeTrans">
                <option value>请选择翻译语种</option>
                <option :key="index" v-for="(item, index) in list" :value="item.val">{{ item.name }}</option>
            </select>
            <button @click="btn" style="cursor: pointer">点击翻译</button>
        </section>

        <!-- 译文区域 -->
        <footer>
            <div>
                <textarea readonly cols="70" rows="10" placeholder="译文"></textarea>
                <span class="copy" @click="copy" style="cursor: pointer">点击复制</span>
            </div>
        </footer>

        <!-- 推广 -->
        <article>
            <a target="_blank" href="https://me.csdn.net/Jkssns">点击进入一个肥宅的博客</a>
            <a target="_blank" href="https://github.com/Jkssns/translate">点击进入一个肥宅的github</a>
        </article>
    </div>
</template>
 
<script>
import $ from 'jquery'
import MD5 from '@/assets/md5'
var appid = import.meta.env.VITE_APPID
var key = import.meta.env.VITE_APPKEY
export default {
    data() {
        return {
            list: [
                { val: 'zh', name: '中文' },
                { val: 'en', name: '英语' },
                { val: 'yue', name: '粤语' },
                { val: 'wyw', name: '文言文' },
                { val: 'kor', name: '韩语' },
                { val: 'fra', name: '法语' },
                { val: 'spa', name: '西班牙语' },
                { val: 'th', name: '泰语' },
                { val: 'ara', name: '阿拉伯语' },
                { val: 'ru', name: '俄语' },
                { val: 'pt', name: '葡萄牙语' },
                { val: 'de', name: '德语' },
                { val: 'it', name: '意大利语' },
                { val: 'el', name: '希腊语' },
                { val: 'nl', name: '荷兰语' },
                { val: 'pl', name: '波兰语' },
                { val: 'bul', name: '保加利亚语' },
                { val: 'est', name: '爱沙尼亚语' },
                { val: 'dan', name: '丹麦语' },
                { val: 'fin', name: 'fin' },
                { val: 'cs', name: '捷克语' },
                { val: 'rom', name: '罗马尼亚语' },
                { val: 'slo', name: '斯洛文尼亚语' },
                { val: 'swe', name: '瑞典语' },
                { val: 'hu', name: '匈牙利语' },
                { val: 'cht', name: '繁体中文' },
                { val: 'vie', name: '越南语' },
            ],
            val: '',
            transVal: '',
            from: 'auto',
            to: 'zh',
            canRun: true,
        }
    },

    methods: {
        changeTrans(e) {
            this.to = e.target.value
        },
        btn() {
            var salt = Date.now()
            var str = appid + this.val + salt + key
            var sign = MD5(str)
            // 请求方式1
            $.ajax({
                url: window.BASEURL,
                type: 'get',
                dataType: 'jsonp',
                data: {
                    q: this.val,
                    appid: appid,
                    salt: salt,
                    from: this.from,
                    to: this.to,
                    sign: sign,
                    time: new Date().getTime(),
                },
                success: function (data) {
                    $('textarea').html(data.trans_result[0].dst)
                },
            })
        },

        /* 点击复制 */
        copy() {
            $('textarea').select()
            let copyDone = document.execCommand('Copy')
            if (copyDone === true && $('textarea').val() !== '') {
                let p = document.createElement('p')
                p.classList = 'success_msg'
                p.innerHTML = '复制成功'
                document.getElementsByTagName('body')[0].prepend(p)
                setTimeout(() => {
                    document.getElementsByTagName('body')[0].removeChild(p)
                }, 1500)
            }
        },
    },
}
</script>

<style scoped>
* {
    font-family: '楷体';
    font-size: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* header */
header {
    margin: 20px auto;
}
h1 {
    font-size: 50px;
    margin: 0 auto;
    text-align: center;
}

/* section */
section {
    margin: 40px auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
}
section > input,
select,
button {
    height: 40px;
    width: 30%;
    outline: none;
    border: 1px solid black;
}
section > select {
    height: 42px;
}
section > button {
    border: none;
    background: none;
    color: deepskyblue;
    outline: none;
    border: 1px solid;
}

/* footer */
footer {
    width: 100%;
    display: flex;
    margin: 20px 0;
    justify-content: center;
}
footer textarea {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid black;
}
footer .copy {
    position: absolute;
    right: 40px;
    bottom: 20px;
}
footer div {
    width: 80%;
    position: relative;
}

/* article */
article {
    text-align: center;
}
article > a:nth-of-type(1) {
    margin: 20px;
    display: block;
    text-decoration: none;
}
@media screen and (max-width: 600px) {
    section > input,
    select,
    button {
        font-size: 13px;
    }
}
@media screen and (max-width: 500px) {
    section > input,
    select,
    button {
        font-size: 10px;
    }
}
</style>

<style>
.success_msg {
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%,0);
  width: 4em;
  padding: 8px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: white;
}
</style>
