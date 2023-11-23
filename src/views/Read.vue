<template>
    <template v-if="dataSurah!=null">
        <header class="w-full h-[350px] relative">
            <img :src="bg" alt="" class="w-full h-full">
            <div class="w-full h-full absolute top-0 md:p-12 p-8 flex flex-col justify-center space-y-4 text-slate-200">
                <p class="text-right md:text-6xl text-xl font-bold">{{dataSurah.name_translations.ar}}</p>
                <p>Nama surah : {{dataSurah.name}}</p>
                <p>English : {{dataSurah.name_translations.en}}</p>
                <p>Indonesia : {{dataSurah.name_translations.id}}</p>
                <audio controls class="mt-2 w-full">
                    <source :src="dataSurah.recitations[0].audio_url" type="">
                </audio>
            </div>
        </header>
        <section class="w-full p-4 bg-slate-800">
            <div class="md:w-[80%] p-4 my-2 shadow-md w-[95%] mx-auto rounded-md shadow-lg bg-slate-700 text-slate-200 border-2 border-slate-600 hover:shadow-lg" v-for="i in dataSurah.verses">
                <p class="mb-2">{{i.text}}</p>
                <p>Terjemahan :</p>
                <p class="mb-2">{{i.translation_id}}</p>
                <p>In English :</p>
                <p>{{i.translation_en}}</p>
            </div>
        </section>
    </template>
    <template v-else>
        <p class="p-4 text-slate-900">Page is loading ...</p>
    </template>
</template>
<script setup>
import bg from "../assets/bg-1.avif"
import axios from "axios"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router";
const router = useRoute();
let dataSurah = ref(null)
onMounted(() => {
    axios.get(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${router.params.id}.json`).then(res => {
        dataSurah.value = res.data
        console.log(res)

    }).catch(m => {
        console.log(m.response.status)
    })

})
</script>