<template>
    <div 
        :class="['option', { 'selected': isSelected }]"
        @click="handleSelect"
    >
        {{ label }}
    </div>
</template>

<script>
export default {
    name: 'BaseOption',
    props:{
        label: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        isSelected: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleSelect() {
            // Raise click event, parent component handles logic
            this.$emit('select', this.value);
        },
    },
};
</script>

<style>
.option {
    background-color: #FEF6F5;
    color: #262626;
    font-size: 1.25rem;
    font-weight: 500;
    border: #FBDBD8 2px solid;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    margin-block: 0.5rem;
    text-align: start;
    width: 100%;
}
.option:hover {
    background-color: #fffbfa;
    color: #262626;
    box-shadow: none;
}
.option.selected {
    background-color: #FBDBD8;
    border: #F9C9C5 2px solid;
    color:  hsl(0, 0%, 60%);
    box-shadow: none;
}

</style>