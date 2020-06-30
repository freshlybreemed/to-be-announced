import { EventProps, OrderProps } from '../../src/@types/types';
import QRCode from 'qrcode.react';

// import {
//   formatEventDateTime,
//   formatDate,
//   formatPrice,
// } from '../../src/lib/index';
export const ticketTemplate = {
  content: (order: OrderProps) => `<html>
  <head>
    <meta charset="utf8">
    <title>SuitArt Business Card</title>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        font-family: 'Sackers Gothic Std';
        font-weight: 500;
        font-size: 7px;
        background: rgb(241,241,241);
        -webkit-print-color-adjust: exact;
        box-sizing: border-box;
      }

      .page {
        position: relative;
        height: 90mm;
        width: 50mm;
        display: block;
        background: black;
        page-break-after: auto;
        margin: 50px;
        overflow: hidden;
      }

      @media print {
        body {
          background: black;
        }

        .page {
          margin: 0;
          height: 100%;
          width: 100%;
        }
      }

      .page.first {
        border-left: 5px solid green;
      }

      .bottom {
        position: absolute;
        left: 5mm;
        right: 5mm;
        bottom: 5mm;
      }

      .group {
        margin-top: 3mm;
      }

      .line {
        color: white;
        position: relative;
      }

      .center {
        text-align: center;
      }

      .logo {
        position: relative;
        width: 80%;
        left: 10%;
        top: 15%;
      }

    </style>
  </head>
  <body>
    <div class="page">
      <div class="bottom">
        <div class="line">Marc Bachmann</div>
        <div class="line">cto</div>

        <div class="group">
          <div class="line">p: +41 00 000 00 00</div>
          <div class="line">github: marcbachmann</div>
        </div>
        <div class="group">
          <div class="line">suitart ag</div>
          <div class="line">räffelstrasse 25</div>
          <div class="line">8045 zürich</div>
        </div>
      </div>
    </div>
    <div class="page">
      ${order.tickets.map((curr) => {
        return (
          <div className="w-80 ma2 black dib">
            <div
              style={{
                borderRadius: '8px',
              }}
              className="bg-light-gray h-25 fl relative pa2 mt1 bt w-80"
            >
              <h3
                className="mv2 pv3"
                style={{
                  background:
                    'linear-gradient(to bottom, #e84c3d 0%, #e84c3d 26%, #ecedef 26%, #ecedef 100%)',
                }}
              >
                Social <span className="normal">Ticketing</span>
              </h3>
              <div className="fl">
                <div className="ttu  mt3">
                  <h4 className="mv0">'event.name'</h4>
                  <span className="normal f7 gray">Event</span>
                </div>
                <div className="ttu mt2">
                  <h4 className="mv0">{`${order.firstName} ${order.lastName}`}</h4>
                  <span className="normal f7 gray">Name</span>
                </div>
                <div className="ttu fl mt2">
                  <h4 className="mv0">{curr.ticketName}</h4>
                  <span className="normal f7 gray">Ticket</span>
                </div>
                <div className="ttu fl mt2 ml2">
                  <h4 className="mv0">3PM</h4>
                  <span className="normal f7 gray">Time</span>
                </div>
              </div>
              <QRCode
                className="v-mid fr"
                value={`http://www.socialticketing.com/ticket/${curr.barCode}`}
                renderAs="svg"
                size={80}
              />{' '}
            </div>
          </div>
        );
      })}
      <div class="bottom">
          <div class="line center">8045 zürich</div>
      </div>
    </div>
  </body>
</html>`

}