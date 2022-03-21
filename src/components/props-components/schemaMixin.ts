import { ref, watch } from 'vue'
export default function(props, context) {
        const eValue = ref(props.value)

        watch(eValue, (value) => {
            context.emit("update:modelValue",value);
        })
        watch(props, (newValue) => {
            eValue.value = newValue.value
        })

        return {
            eOptions: props.options || {},
            eValue,
            label: props.label
        }
    
}