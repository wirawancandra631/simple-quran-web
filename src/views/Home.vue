<template>
    <header class="w-full h-[400px] relative">
        <img :src="bg" alt="" class="w-full h-full">
        <div class="w-full h-full absolute top-0 z-[20] p-8 flex flex-col justify-center space-y-6">
            <h1 class="md:text-6xl text-xl font-bold text-white">Simple Quran</h1>
            <p class="text-white">Menyediakan bacaan quran dilengkapi audio dan terjemahan ,serta jadwal sholat lengkap</p>
            <div>
                <a href="" class="px-2 py-3 bg-blue-600 text-white rounded-md">Lihat jadwal sholat</a>
            </div>
        </div>
    </header>
    <section class="w-full min-h-screen bg-slate-800 ">
        <form action="" class="md:p-8 p-4 md:w-1/2 w-[90%] mx-auto flex space-x-2">
            <select name="" id="" class="w-full p-3 border-2 border-slate-600 outline-slate-600 bg-slate-700 text-white rounded-md" @change="(e)=>filterSurah(e.target.value)">
                <option value="" selected>ALL</option>
                <template v-for="i in dataSurahSelect">
                    <option :value="i.number_of_surah">{{i.name}}</option>
                </template>
            </select>
        </form>
        <div class="w-full p-4 flex flex-wrap justify-center">
            <template v-if="dataSurah.length>0" v-for="i in dataSurah" :key="i.number_of_surah">
                <router-link :to="`/read/${i.number_of_surah}`" class="md:w-[20%] w-[95%] m-2 h-[180px]  p-4 rounded-md shadow-lg bg-slate-700 text-slate-200 border-2 border-slate-600 hover:shadow-lg hover:scale-[0.9] ">
                    <p class="text-right text-xl font-bold">{{i.name_translations.ar}}</p>
                    <p>{{i.name}}</p>
                    <p class="my-2">Number of surah {{i.number_of_surah}}</p>
                    <p class="my-2">Number of ayat {{i.number_of_ayah}}</p>
                    <small class="block text-right">Type surah {{i.type}}</small>
                </router-link>
            </template>
            <p class="text-center text-slate-200 " v-else>Loading ...</p>
        </div>
    </section>
</template>
<script setup>
import bg from "../assets/bg-1.avif"
import axios from "axios";
import { ref, onMounted } from "vue";

let dataSurah = ref([])
let dataSurahSelect = ref([])
onMounted(() => {
    axios.get("https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json").then(res => {
        dataSurah.value = res.data
        dataSurahSelect.value = res.data
    })

})
const filterSurah = (params) => {
    axios.get("https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json").then(res => {
        if (params !== "") {
            dataSurah.value = res.data.filter(e => e.number_of_surah == params)

        } else {
            dataSurah.value = res.data
        }
    })

}
</script>