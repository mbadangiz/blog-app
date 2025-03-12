import { In_AvatarProps } from "@typesDef/interfaces";
import classNames from "classnames";
import defAvatar from "./assets/user.png";
import { En_Size } from "@typesDef/enum";

export default function Avatar({
  src,
  size = En_Size.SMALL,
  alt,
  isAvatarGrp = false,
  srcGrp,
}: In_AvatarProps) {
  if (isAvatarGrp)
    return (
      <div className="relative flex content-center items-center justify-start">
        {srcGrp &&
          srcGrp.map((singSrc, index) => {
            return (
              <div
                className={classNames({
                  "relative rounded-full border-2 border-inherit": true,
                  "size-6": "extraSmall" === size,
                  "size-8": "small" === size,
                  "size-12": "medium" === size,
                  "size-16": "large" === size,
                  "size-24": "extraLarge" === size,
                  "hover:ml-6": true,
                })}
                style={{
                  right: -25 * index + "px",
                }}
              >
                <img
                  src={singSrc.src ? singSrc.src : defAvatar}
                  alt={alt || "Avatar"}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            );
          })}
      </div>
    );

  return (
    <div
      className={classNames({
        "rounded-full": true,

        "size-6": "extraSmall" === size,
        "size-8": "small" === size,
        "size-12": "medium" === size,
        "size-16": "large" === size,
        "size-24": "extraLarge" === size,
      })}
    >
      <img
        src={src ? src : defAvatar}
        alt={alt}
        className="size-full rounded-full"
      />
    </div>
  );
}
