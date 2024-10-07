import React, { useState, useEffect, useMemo } from 'react';
import { Cloud, CloudProps, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

interface IconType {
  title: string;
  slug: string;
  svg: string;
  path: string;
}

const cloudProps: CloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon: IconType) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  });
};

interface IconCloudProps {
  iconSlugs: string[];
}

const IconCloud: React.FC<IconCloudProps> = ({ iconSlugs }) => {
  const [data, setData] = useState<{ simpleIcons: { [key: string]: IconType } } | null>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
};

export default IconCloud;