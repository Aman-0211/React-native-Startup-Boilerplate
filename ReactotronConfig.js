import Reactotron, {networking} from 'reactotron-react-native';

Reactotron.configure({
  name: 'Product',
})
  .use(
    networking({
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(secure.livechatinc.com|symbolicate)$/,
    }),
  )
  .useReactNative({
    editor: false, // there are more options to editor
    overlay: false, // just turning off overlay
  })
  .connect();
