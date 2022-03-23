import { ref, watch, toRefs } from "vue";
export default function (props: any, emit: any) {
  const { value, label, options } = toRefs(props);
  const eValue = ref('');

  watch(eValue, (value) => {
    emit("update:modelValue", value);
  });
  watch(value, (newValue) => {
    eValue.value = newValue;
  });

  return {
    eOptions: options || {},
    eValue,
    label,
  };
}
