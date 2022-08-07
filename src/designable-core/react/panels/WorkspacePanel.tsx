import React, { ReactNode } from 'react'
import { usePrefix } from '../hooks'

export interface IWorkspaceItemProps {
  style?: React.CSSProperties
  flexable?: boolean
  children?: ReactNode
}

export const WorkspacePanel: React.FC<{ children?: ReactNode }> & {
  Item?: React.FC<IWorkspaceItemProps>
} = (props) => {
  const prefix = usePrefix('workspace-panel')
  return <div className={prefix}>{props.children}</div>
}

WorkspacePanel.Item = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const prefix = usePrefix('workspace-panel-item')
  return (
    <div
      className={prefix}
      style={{
        ...props.style,
        flexGrow: props.flexable ? 1 : 0,
        flexShrink: props.flexable ? 1 : 0,
      }}
    >
      {props.children}
    </div>
  )
}
