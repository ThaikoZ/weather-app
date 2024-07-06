declare module "weather-icons-react" {
  import * as React from "react";

  export interface IconProps {
    size?: number;
    color?: string;
    className?: string;
  }

  export const WiDayCloudy: React.FC<IconProps>;
  export const WiRain: React.FC<IconProps>;
  export const WiCloudy: React.FC<IconProps>;

  export const WiDaySunny: React.FC<IconProps>;
  export const WiStrongWind: React.FC<IconProps>;
  export const WiRaindrop: React.FC<IconProps>;
  export const WiDust: React.FC<IconProps>;
  export const WiHumidity: React.FC<IconProps>;
  export const WiRaindrops: React.FC<IconProps>;
}
