<template>
    <button 
        class="base__button" 
        :disabled="disabled" 
    >
        <slot>{{ label }}</slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        label: {
            type: String,
            default: 'Start Quiz',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },   
};
</script>

<style>
.base__button {
    background-color: #EC4C3E;
    width: 240px;
    border: none;
    border-radius: 100px;
    color: #fdfbf7;
    cursor: pointer;
    font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    text-transform: uppercase;
    padding: 1rem 2rem;
    transition: color 0.4s ease, background-color 0.6s ease, box-shadow 0.6s ease; 
}
.base__button:hover {
    color: #F26B5E;
    background-color: #FBDBD8;
      /* inner border */
}
.base__button:disabled {
    background-color: #FBDBD8;
    color: #FEF6F5;
    cursor: not-allowed;
}
</style>

