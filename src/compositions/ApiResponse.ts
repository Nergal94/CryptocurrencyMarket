import {reactive, onMounted, onDeactivated} from 'vue';

export const apiResponse = (apiMethod: any, isNeedRefresh?: boolean, refreshInterval?: number) => {
  const response = reactive({
    data: {},
  });

  let internal: any = null;

  const getData = async () =>  {
    response.data = await apiMethod();
  }

  onMounted(async () => {
    await getData();

    if (isNeedRefresh) {
      internal = setInterval(() => getData(), refreshInterval);
    }
  });

  onDeactivated(() => {
    clearInterval(internal);
  });

  return {
    response
  }
};
