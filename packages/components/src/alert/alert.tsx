import {
  defineStyle,
  omitThemingProps,
  ThemingProps,
} from "@chakra-ui/styled-system"
import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  useMultiStyleConfig,
} from "../system"
import { cx } from "@chakra-ui/utils"
import {
  AlertProvider,
  AlertStatus,
  AlertStylesProvider,
  getStatusColorScheme,
} from "./alert-context"

interface AlertOptions {
  /**
   * The status of the alert
   * @default "info"
   */
  status?: AlertStatus
}

export interface AlertProps
  extends HTMLChakraProps<"div">,
    AlertOptions,
    ThemingProps<"Alert"> {
  /**
   * @default false
   */
  addRole?: boolean
}

/**
 * Alert is used to communicate the state or status of a
 * page, feature or action
 *
 * @see Docs https://v2.chakra-ui.com/docs/components/alert
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/alert/
 */
export const Alert = forwardRef<AlertProps, "div">(function Alert(props, ref) {
  const { status = "info", addRole = true, ...rest } = omitThemingProps(props)
  const colorScheme = props.colorScheme ?? getStatusColorScheme(status)

  const styles = useMultiStyleConfig("Alert", { ...props, colorScheme })

  const alertStyles = defineStyle({
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...styles.container,
  })

  return (
    <AlertProvider value={{ status }}>
      <AlertStylesProvider value={styles}>
        <chakra.div
          data-status={status}
          role={addRole ? "alert" : undefined}
          ref={ref}
          {...rest}
          className={cx("chakra-alert", props.className)}
          __css={alertStyles}
        />
      </AlertStylesProvider>
    </AlertProvider>
  )
})

Alert.displayName = "Alert"
