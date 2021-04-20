import React, { useState } from 'react';
import { Dropdown } from 'rsuite'
const close = require('../../../../../../../assets/clear-button.svg') as string;
import { AnyFunction } from '../../../../../../utils/types';

import './style.scss';

type Props = {
  title: string;
  subtitle: string;
  toggleChat: () => void;
  showCloseButton: boolean;
  titleAvatar?: string;
  onHandleReceiverChanged?: AnyFunction;
  receiverData?: any;
}

function Header({ title, subtitle, toggleChat, showCloseButton, titleAvatar, onHandleReceiverChanged, receiverData }: Props) {
  const [dropDownTitle, setDropDownTitle] = useState("Choose someone to chat with")


  return (
    <div className="rcw-header">
      {showCloseButton &&
        <button className="rcw-close-button" onClick={toggleChat}>
          <img src={close} className="rcw-close" alt="close" />
        </button>
      }
      {onHandleReceiverChanged && receiverData &&
        <Dropdown className="rcw-dropdown" title={dropDownTitle}>
          {receiverData.map(data => <Dropdown.Item key={data.text} onSelect={() => onHandleReceiverChanged(data)}>{data.text}</Dropdown.Item>)}
        </Dropdown>
      }
      <h4 className="rcw-title">
        {titleAvatar && <img src={titleAvatar} className="avatar" alt="profile" />}
        {title}
      </h4>
      <span>{subtitle}</span>
    </div>
  );
}

export default Header;
