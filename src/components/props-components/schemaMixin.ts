import { ref, watch, toRefs } from 'vue'
export default function(props, context) {
        const eValue = ref(props.value)
        const { value } = toRefs(props)

        watch(eValue, (value) => {
            context.emit("update:modelValue",value);
        })
        watch(value, (newValue) => {
            eValue.value = newValue
        })

        return {
            eOptions: props.options || {},
            eValue,
            label: props.label
        }
    
}