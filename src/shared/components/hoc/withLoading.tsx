import { ComponentType } from "react";

interface WithLoadingProps {
  isLoading: boolean;
}

export const withLoading = <P extends object>(
  WrappedComponent: ComponentType<P>,
  LoadingComponent: ComponentType
) => {
  return (props: P & WithLoadingProps) => {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <LoadingComponent />;
    }

    return <WrappedComponent {...(restProps as P)} />;
  };
};