import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

export const BackArrowIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={24}
      viewBox="0 0 14 24"
      {...props}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path
            data-name="Path 922"
            d="M43.519-38.53a1.65 1.65 0 00-2.307 0L30.381-27.9a1.257 1.257 0 000 1.8l10.831 10.63a1.65 1.65 0 002.307 0 1.577 1.577 0 000-2.264l-9.437-9.273 9.45-9.273a1.573 1.573 0 00-.013-2.25z"
            fill="#476883"
            clipRule="evenodd"
          />
        </ClipPath>
        <ClipPath id="prefix__b">
          <Path data-name="Path 921" d="M0 0h414v-110H0z" fill="#476883" />
        </ClipPath>
      </Defs>
      <G
        data-name="Group 913"
        transform="translate(-30 39)"
        clipPath="url(#prefix__a)">
        <G data-name="Group 912" clipPath="url(#prefix__b)">
          <Path data-name="Path 920" d="M25-44h24v34H25z" fill="#476883" />
        </G>
      </G>
    </Svg>
  );
};
