<template>
    <PageHeader />
    <router-view />
    <PageFooter />
</template>
  
<script>
import PageHeader from "@/components/common/PageHeader.vue";
import PageFooter from "@/components/common/PageFooter.vue";

export default {
    components: {
        PageHeader,
        PageFooter,
    },
};
</script>