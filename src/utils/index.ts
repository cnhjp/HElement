import { getCurrentInstance, ComponentInternalInstance } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export function useGlobalConfig():any {
  const instance: ComponentInternalInstance | null = getCurrentInstance();
  if (!instance) {
    console.log('useGlobalConfig必须在setup中调用!');
    return;
  }
  // eslint-disable-next-line consistent-return
  return instance.appContext.config.globalProperties.$HELEMENT || {};
}
