import { cx, dataAttr } from "@chakra-ui/utils"
import { HTMLChakraProps, chakra, forwardRef } from "../system"
import { useStepContext, useStepperStyles } from "./step-context"

export interface StepProps extends HTMLChakraProps<"div"> {}

export const Step = forwardRef<StepProps, "div">(function Step(props, ref) {
  const { orientation, status, showLastSeparator } = useStepContext()
  const styles = useStepperStyles()

  return (
    <chakra.div
      ref={ref}
      data-status={status}
      data-orientation={orientation}
      data-stretch={dataAttr(showLastSeparator)}
      __css={styles.step}
      {...props}
      className={cx("chakra-step", props.className)}
    />
  )
})
