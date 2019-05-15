import React from 'react';

import './GuaranteeBadge.scss';

const BADGE_TEXTS = {
  vpn: 'VPN',
  safe_boost: 'Safe Boost',
  support: '24/7 Support',
  refund: 'Money Refunds',
  cashback: '5% Cashback',
  secure: 'SSL Secure'
};

function GuaranteeBadge ({type}) {
  return (
    <span className={"guarantee-badge " + type}>
      {BADGE_TEXTS[type]}
    </span>
  )
}

export default GuaranteeBadge;
