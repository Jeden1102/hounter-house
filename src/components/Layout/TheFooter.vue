<template>
    <div class="footer">
        <div class="footer-content">
            <div class="logo">
                <img src="/path/to/your/logo.png" alt="Logo" />
            </div>
            <div class="site-info">
                <h3>Page name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit similique dolorem facilis quam
                    tempora perferendis maiores numquam unde quis.</p>
            </div>
            <div class="social-media">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
        <div class="copyright">
            &copy; 2024 All rights reserved.
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps([]);
</script>
  
<style scoped>
.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.logo img {
    width: 100px;
    height: auto;
}

.site-info {
    flex-grow: 1;
    margin: 0 20px;
}

.site-info h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.social-media a {
    color: #fff;
    font-size: 1.5rem;
    margin-right: 15px;
}

.copyright {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9rem;
}
</style>
  