<script>
import PostCard from '../../../components/PostCard.vue';

export default {
    components: {
        PostCard
    },
    data() {
        return {
            posts: [
                { title: "Post 1", date: "March 10, 2023", category: "Tech", image: "/images/post1.jpg" },
                { title: "Post 2", date: "March 12, 2023", category: "AI", image: "/images/post2.jpg" },
                { title: "Post 3", date: "March 14, 2023", category: "VR", image: "/images/post3.jpg" }
            ]
        };
    }
}
</script>

<template lang="">
    <div class="mt-[140px]">
        <div class="container">
            <div class="w-full">
                <div class="w-full flex justify-between items-center">
                    <h1 class="text-[32px] font-[600]">Our Recent Post</h1>
                    <div>
                        <button class="text-[#fff] bg-[#7C4EE4] font-[500] px-8 py-2 rounded-[8px] cursor-pointer">View</button>
                    </div>
                </div>
                <div class="mt-8 flex justify-between gap-4">
                    <div class="h-[450px] w-[57%]">
                        <img class="h-full" src="/images/about.png" alt="Post Image">
                    </div>
                    <div class="w-[43%] ps-8">
                        <span class="text-[12px] font-[600]">DEVELOPMENT</span>
                        <span class="text-[12px] ps-4">16 March 2023</span>
                        <h1 class="text-[38px] font-[700] leading-[1.15] mt-8 text-[#000]">
                            How to make a Game look more attractive with New VR & AI Technology
                        </h1>
                        <p class="text-[16px] leading-[1.5] text-[#444] mt-4">
                            Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                        </p>
                        <button class="bg-white text-[#7C4EE4] border border-[#7C4EE4] font-[500] px-4 py-2 rounded-[8px] mt-8">Read more</button>
                    </div>
                </div>
            </div>
            <div class="mt-16">
                <div class="grid grid-cols-3 gap-2">
                    <PostCard v-for="(post, index) in posts" :key="index" :post="post" />
                </div>

            </div>
        </div>
    </div>
</template>
