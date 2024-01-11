<template>
    <div class="footer">
        <div class="footer-content">
            <div class="logo">
                <img width="100" height="30" src="@/assets/logo1.svg" alt="Site logo" loading="lazy" />
            </div>
            <div class="site-info">
                <h3>Hounter house</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit similique dolorem facilis quam
                    tempora perferendis maiores numquam unde quis.</p>
            </div>
        </div>
        <div class="copyright">
            &copy; 2024 All rights reserved.
        </div>
    </div>
</template>
<style scoped lang="scss">
.footer {
    color: black;
    padding: 40px 10px;
    -webkit-box-shadow: 0px -3px 47px -22px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px -3px 47px -22px rgba(66, 68, 90, 1);
    box-shadow: 0px -3px 47px -22px rgba(66, 68, 90, 1);
    margin-top: 40px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: column;
    gap: 12px;

    @media(min-width:768px) {
        flex-direction: row;
        gap: 40px;
    }
}

.logo img {
    width: 100px;
    height: auto;
}

.site-info {
    flex-grow: 1;
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
  