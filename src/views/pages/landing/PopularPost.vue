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
                { title: "Post 2", date: "March 12, 2023", category: "AI", image: "/images/post2.jpg" },
                { title: "Post 2", date: "March 12, 2023", category: "AI", image: "/images/post2.jpg" },
                { title: "Post 2", date: "March 12, 2023", category: "AI", image: "/images/post2.jpg" },
                { title: "Post 3", date: "March 14, 2023", category: "VR", image: "/images/post3.jpg" }
            ]
        };
    }
}
</script>

<template lang="">
    <div class="mt-16">
        <div class="container">
            <div class="w-full">
                <div class="w-full flex justify-between items-center">
                    <h1 class="text-[32px] font-[600]">Popular Post</h1>
                    <div>
                        <button class="text-[#fff] bg-[#7C4EE4] font-[500] px-8 py-2 rounded-[8px] cursor-pointer">View</button>
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
