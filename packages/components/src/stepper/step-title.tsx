import { cx } from "@chakra-ui/utils"
import { HTMLChakraProps, chakra, forwardRef } from "../system"
import { useStepContext, useStepperStyles } from "./step-context"

export interface StepTitleProps extends HTMLChakraProps<"h3"> {}

export const StepTitle = forwardRef<StepTitleProps, "h3">(function StepTitle(
  props: StepTitleProps,
  ref,
) {
  const { status } = useStepContext()
  const styles = useStepperStyles()
  return (
    <chakra.h3
      ref={ref}
      data-status={status}
      {...props}
      __css={styles.title}
      className={cx("chakra-step__title", props.className)}
    />
  )
})
