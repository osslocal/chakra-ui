import { cx } from "@chakra-ui/utils"
import { chakra, forwardRef, HTMLChakraProps } from "../system"
import { useStepContext, useStepperStyles } from "./step-context"

export interface StepNumberProps extends HTMLChakraProps<"div"> {}

export const StepNumber = forwardRef<StepNumberProps, "div">(
  function StepNumber(props, ref) {
    const { children, ...restProps } = props
    const { status, index } = useStepContext()
    const styles = useStepperStyles()
    return (
      <chakra.div
        ref={ref}
        data-status={status}
        __css={styles.number}
        {...restProps}
        className={cx("chakra-step__number", props.className)}
      >
        {children || index + 1}
      </chakra.div>
    )
  },
)
