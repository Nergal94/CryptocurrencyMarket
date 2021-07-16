import {reactive, onMounted} from 'vue';

export const apiResponse = (apiMethod: any) => {
  const response = reactive({
    data: null
  })

  onMounted(async () => {
    response.data = await apiMethod();
  });

  return {
    response
  }
};
