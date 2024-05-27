import {SvgWrapper} from '@components/atoms';
import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconsProps} from './typeInterface';

const EditIcon: FC<IconsProps> = ({width, height, color}) => {
  return (
    <SvgWrapper
      width={width}
      height={height}
      aspectRatio={25 / 25}
      children={
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <Path
            d="M13.3029 8.27086C13.562 7.94765 13.51 7.47563 13.1868 7.21659C12.8635 6.95754 12.3915 7.00956 12.1325 7.33277L13.3029 8.27086ZM6.57396 15.4674L7.14199 15.9572C7.14785 15.9504 7.15358 15.9435 7.15919 15.9365L6.57396 15.4674ZM6.39583 15.9029L5.64729 15.854L5.64664 15.8682L6.39583 15.9029ZM6.25 19.0518L5.5008 19.0171C5.49908 19.0544 5.50013 19.0917 5.50396 19.1288L6.25 19.0518ZM7.06979 19.7674L7.09431 20.517C7.14433 20.5154 7.19406 20.5088 7.24275 20.4972L7.06979 19.7674ZM10.1948 19.0268L10.3678 19.7567L10.3794 19.7537L10.1948 19.0268ZM10.5958 18.7727L11.1744 19.25L11.1809 19.2419L10.5958 18.7727ZM17.4726 11.396C17.7317 11.0729 17.6798 10.6008 17.3567 10.3417C17.0336 10.0826 16.5615 10.1345 16.3024 10.4576L17.4726 11.396ZM12.1358 7.33258C11.8766 7.6557 11.9285 8.12774 12.2516 8.38689C12.5747 8.64605 13.0468 8.59419 13.3059 8.27106L12.1358 7.33258ZM14.375 5.73932L14.9601 6.20856C14.9699 6.19627 14.9794 6.18367 14.9885 6.17078L14.375 5.73932ZM16.0719 5.40598L16.5517 4.82954C16.5278 4.80966 16.5027 4.79129 16.4765 4.77452L16.0719 5.40598ZM18.4021 7.34557L18.9329 6.81573C18.9166 6.79942 18.8996 6.78387 18.8819 6.76913L18.4021 7.34557ZM18.7531 8.20065L19.503 8.20477V8.20477L18.7531 8.20065ZM18.3927 9.05182L17.8677 8.51618C17.8465 8.53701 17.8265 8.55909 17.8078 8.58231L18.3927 9.05182ZM16.3026 10.4573C16.0433 10.7803 16.095 11.2524 16.418 11.5117C16.741 11.771 17.2131 11.7193 17.4724 11.3963L16.3026 10.4573ZM13.4626 7.69067C13.4012 7.28103 13.0193 6.99871 12.6097 7.0601C12.2 7.12148 11.9177 7.50333 11.9791 7.91297L13.4626 7.69067ZM16.9885 11.67C17.3989 11.6142 17.6864 11.2363 17.6307 10.8258C17.5749 10.4154 17.197 10.1279 16.7865 10.1836L16.9885 11.67ZM12.1325 7.33277L5.98873 14.9984L7.15919 15.9365L13.3029 8.27086L12.1325 7.33277ZM6.00593 14.9777C5.79436 15.2231 5.66851 15.5307 5.64742 15.8541L7.14424 15.9517C7.14411 15.9537 7.14332 15.9556 7.14199 15.9572L6.00593 14.9777ZM5.64664 15.8682L5.5008 19.0171L6.9992 19.0865L7.14503 15.9376L5.64664 15.8682ZM5.50396 19.1288C5.58735 19.9373 6.28192 20.5436 7.09431 20.517L7.04527 19.0178C7.02012 19.0187 6.99862 18.9999 6.99604 18.9749L5.50396 19.1288ZM7.24275 20.4972L10.3678 19.7566L10.0218 18.297L6.89683 19.0377L7.24275 20.4972ZM10.3794 19.7537C10.6912 19.6745 10.9697 19.4981 11.1744 19.2499L10.0173 18.2954C10.0155 18.2976 10.013 18.2992 10.0102 18.2999L10.3794 19.7537ZM11.1809 19.2419L17.4726 11.396L16.3024 10.4576L10.0107 18.3034L11.1809 19.2419ZM13.3059 8.27106L14.9601 6.20856L13.7899 5.27008L12.1358 7.33258L13.3059 8.27106ZM14.9885 6.17078C15.1425 5.95176 15.4418 5.89297 15.6672 6.03745L16.4765 4.77452C15.5747 4.19661 14.3777 4.43175 13.7615 5.30785L14.9885 6.17078ZM15.5921 5.98242L17.9223 7.92201L18.8819 6.76913L16.5517 4.82954L15.5921 5.98242ZM17.8713 7.87541C17.9563 7.96058 18.0037 8.07619 18.0031 8.19653L19.503 8.20477C19.5059 7.68424 19.3006 7.18414 18.9329 6.81573L17.8713 7.87541ZM18.0031 8.19653C18.0024 8.31686 17.9537 8.43195 17.8677 8.51618L18.9177 9.58746C19.2894 9.2231 19.5002 8.7253 19.503 8.20477L18.0031 8.19653ZM17.8078 8.58231L16.3026 10.4573L17.4724 11.3963L18.9776 9.52133L17.8078 8.58231ZM11.9791 7.91297C12.3405 10.3245 14.5722 11.9983 16.9885 11.67L16.7865 10.1836C15.1832 10.4015 13.7023 9.29084 13.4626 7.69067L11.9791 7.91297Z"
            fill={color} //"#B3B7EE"
          />
        </Svg>
      }
    />
  );
};

export default EditIcon;
