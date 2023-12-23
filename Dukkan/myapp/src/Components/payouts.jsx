import * as React from "react";
import styled from "styled-components";

export default function Payouts(props) {
  return (
    <Div>
      <Div2>Transactions | This Month</Div2>
      <Div3>
        <Div4>Payouts (22)</Div4>
        <Div5>Refunds (2)</Div5>
      </Div3>
      <Div6>
        <Div7>
          <Div8>
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cea2ff00945963868fc45d6c9a216df9c1f5bf0e44d4052830608ef9db3a45d3?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            />
          </Div8>
          <Div9>
            <Div10>
              <Div11>Sort</Div11>
              <Img2
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90651e033f9718228a00a26c2c8cf585e295842dfc48747b4ad4d5397db5cf5b?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
              />
            </Div10>
            <Img3
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/292f7ba24753d98c8b1dfb784cfd238342ba9e34a3c5df64d81152c052e02429?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            />
          </Div9>
        </Div7>
        <Div12>
          <Div13>
            <Img4
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/283878a4e7b3868439d76d492c297f96327a5dd97f255e7eaa348a5dcf882cef?apiKey=3d13fd40ad0c42f4bdd670568134c3ca&"
            />
          </Div13>
          <Div14>
            <Div15>Transaction ID</Div15>
            <Div16>Order amount</Div16>
            <Div17>Transaction fees</Div17>
          </Div14>
          <Div18>Total</Div18>
        </Div12>
        <Div19>
          <Div20>
            <Div21 />
            <Div22>
              <Div23>
                <Div24 />
                <Div25>Processing</Div25>
              </Div23>
            </Div22>
            <Div26>131634495747</Div26>
            <Div27>₹10,125.00</Div27>
            <Div28>₹1,125.00</Div28>
            <Div29>₹9,312</Div29>
          </Div20>
          <Div30 />
        </Div19>
        <Div31>
          <Div32>
            <Div33 />
            <Div34>
              <Div35>
                <Div36 />
                <Div37>Successful</Div37>
              </Div35>
            </Div34>
            <Div38>131634495747</Div38>
            <Div39>₹10,125.00</Div39>
            <Div40>₹1,125.00</Div40>
            <Div41>₹9,312</Div41>
          </Div32>
          <Div42 />
        </Div31>
        <Div43>
          <Div44>
            <Div45 />
            <Div46>
              <Div47>
                <Div48 />
                <Div49>Successful</Div49>
              </Div47>
            </Div46>
            <Div50>131634495747</Div50>
            <Div51>₹10,125.00</Div51>
            <Div52>₹1,125.00</Div52>
            <Div53>₹9,312</Div53>
          </Div44>
          <Div54 />
        </Div43>
        <Div55>
          <Div56>
            <Div57 />
            <Div58>
              <Div59>
                <Div60 />
                <Div61>Successful</Div61>
              </Div59>
            </Div58>
            <Div62>131634495747</Div62>
            <Div63>₹10,125.00</Div63>
            <Div64>₹1,125.00</Div64>
            <Div65>₹9,312</Div65>
          </Div56>
          <Div66 />
        </Div55>
        <Div67>
          <Div68>
            <Div69 />
            <Div70>
              <Div71>
                <Div72 />
                <Div73>Successful</Div73>
              </Div71>
            </Div70>
            <Div74>131634495747</Div74>
            <Div75>₹10,125.00</Div75>
            <Div76>₹1,125.00</Div76>
            <Div77>₹9,312</Div77>
          </Div68>
          <Div78 />
        </Div67>
        <Div79>
          <Div80>
            <Div81 />
            <Div82>
              <Div83>
                <Div84 />
                <Div85>Successful</Div85>
              </Div83>
            </Div82>
            <Div86>131634495747</Div86>
            <Div87>₹10,125.00</Div87>
            <Div88>₹1,125.00</Div88>
            <Div89>₹9,312</Div89>
          </Div80>
          <Div90 />
        </Div79>
        <Div91>
          <Div92 />
          <Div93>
            <Div94>
              <Div95 />
              <Div96>Successful</Div96>
            </Div94>
          </Div93>
          <Div97>131634495747</Div97>
          <Div98>₹10,125.00</Div98>
          <Div99>₹1,125.00</Div99>
          <Div100>₹9,312</Div100>
        </Div91>
      </Div6>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div2 = styled.div`
  color: var(--Black-12, #1a181e);
  align-self: start;
  white-space: nowrap;
  font: 500 20px/140% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div3 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 20px;
  gap: 12px;
`;

const Div4 = styled.div`
  color: var(--Black-100, #fff);
  white-space: nowrap;
  border-radius: 40px;
  background-color: var(--Primary-Blue, #146eb4);
  flex-grow: 1;
  justify-content: center;
  padding: 6px 16px;
  font: 500 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div5 = styled.div`
  color: var(--Black-50, #808080);
  white-space: nowrap;
  border-radius: 40px;
  background-color: var(--Black-90, #e6e6e6);
  flex-grow: 1;
  justify-content: center;
  padding: 6px 16px;
  font: 500 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div6 = styled.div`
  border-radius: var(--Spacing-spacing-04, 8px);
  box-shadow: 0px 2px 6px 0px rgba(26, 24, 30, 0.04);
  background-color: var(--Black-100, #fff);
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
  padding: 10px 12px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div7 = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div8 = styled.div`
  align-items: start;
  border-radius: 4px;
  border: 1px solid var(--Black-85, #d9d9d9);
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 13px 60px 13px 16px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 14px;
  overflow: hidden;
  max-width: 100%;
`;

const Div9 = styled.div`
  justify-content: flex-end;
  align-self: center;
  display: flex;
  gap: 16px;
  margin: auto 0;
`;

const Div10 = styled.div`
  border-radius: 4px;
  border: 1px solid var(--Black-85, #d9d9d9);
  background-color: var(--Black-100, #fff);
  display: flex;
  justify-content: space-between;
  gap: 6px;
  padding: 6px 12px;
`;

const Div11 = styled.div`
  color: var(--Black-30, #4d4d4d);
  font: 400 16px/150% Inter, sans-serif;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 36px;
  overflow: hidden;
  max-width: 100%;
`;

const Div12 = styled.div`
  border-radius: 4px;
  background-color: var(--Black-95, #f2f2f2);
  display: flex;
  margin-top: 12px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 12px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div13 = styled.div`
  align-items: center;
  display: flex;
  aspect-ratio: 2.25;
  flex-direction: column;
  justify-content: center;
  padding: 6px 0 6px 37px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 8px;
  overflow: hidden;
`;

const Div14 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div15 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  font: 500 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const Div16 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  font: 500 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const Div17 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  font: 500 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const Div18 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  font: 500 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
`;

const Div19 = styled.div`
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-direction: column;
  padding: 14px 12px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div20 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div21 = styled.div`
  justify-content: center;
  align-items: flex-start;
  background-color: var(--Black-100, #fff);
  display: flex;
  width: 151px;
  height: 20px;
  flex-direction: column;
`;

const Div22 = styled.div`
  justify-content: center;
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  padding-right: 60px;
  flex-direction: column;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div23 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 6px;
`;

const Div24 = styled.div`
  border-radius: 50%;
  display: flex;
  width: 10px;
  height: 10px;
  flex-direction: column;
  margin: auto 0;
`;

const Div25 = styled.div`
  color: var(--Black-12, #1a181e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div26 = styled.div`
  color: var(--Black-30, #4d4d4d);
  white-space: nowrap;
  justify-content: center;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-right: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div27 = styled.div`
  color: var(--Black-12, #1a181e);
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div28 = styled.div`
  color: var(--Black-12, #1a181e);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div29 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div30 = styled.div`
  background-color: #e6e6e6;
  margin-top: 13px;
  height: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div31 = styled.div`
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-direction: column;
  padding: 14px 12px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div32 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div33 = styled.div`
  justify-content: center;
  align-items: flex-start;
  background-color: var(--Black-100, #fff);
  display: flex;
  width: 151px;
  height: 20px;
  flex-direction: column;
`;

const Div34 = styled.div`
  justify-content: center;
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  padding-right: 60px;
  flex-direction: column;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div35 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  @media (max-width: 991px) {
    margin-right: 2px;
  }
`;

const Div36 = styled.div`
  border-radius: 50%;
  display: flex;
  width: 10px;
  height: 10px;
  flex-direction: column;
  margin: auto 0;
`;

const Div37 = styled.div`
  color: var(--Black-12, #1a181e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div38 = styled.div`
  color: var(--Black-30, #4d4d4d);
  white-space: nowrap;
  justify-content: center;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-right: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div39 = styled.div`
  color: var(--Black-12, #1a181e);
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div40 = styled.div`
  color: var(--Black-12, #1a181e);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div41 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div42 = styled.div`
  background-color: #e6e6e6;
  margin-top: 13px;
  height: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div43 = styled.div`
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-direction: column;
  padding: 14px 12px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div44 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div45 = styled.div`
  justify-content: center;
  align-items: flex-start;
  background-color: var(--Black-100, #fff);
  display: flex;
  width: 151px;
  height: 20px;
  flex-direction: column;
`;

const Div46 = styled.div`
  justify-content: center;
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  padding-right: 60px;
  flex-direction: column;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div47 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  @media (max-width: 991px) {
    margin-right: 2px;
  }
`;

const Div48 = styled.div`
  border-radius: 50%;
  display: flex;
  width: 10px;
  height: 10px;
  flex-direction: column;
  margin: auto 0;
`;

const Div49 = styled.div`
  color: var(--Black-12, #1a181e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div50 = styled.div`
  color: var(--Black-30, #4d4d4d);
  white-space: nowrap;
  justify-content: center;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-right: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div51 = styled.div`
  color: var(--Black-12, #1a181e);
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div52 = styled.div`
  color: var(--Black-12, #1a181e);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div53 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div54 = styled.div`
  background-color: #e6e6e6;
  margin-top: 13px;
  height: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div55 = styled.div`
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-direction: column;
  padding: 14px 12px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div56 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div57 = styled.div`
  justify-content: center;
  align-items: flex-start;
  background-color: var(--Black-100, #fff);
  display: flex;
  width: 151px;
  height: 20px;
  flex-direction: column;
`;

const Div58 = styled.div`
  justify-content: center;
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  padding-right: 60px;
  flex-direction: column;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div59 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  @media (max-width: 991px) {
    margin-right: 2px;
  }
`;

const Div60 = styled.div`
  border-radius: 50%;
  display: flex;
  width: 10px;
  height: 10px;
  flex-direction: column;
  margin: auto 0;
`;

const Div61 = styled.div`
  color: var(--Black-12, #1a181e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div62 = styled.div`
  color: var(--Black-30, #4d4d4d);
  white-space: nowrap;
  justify-content: center;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-right: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div63 = styled.div`
  color: var(--Black-12, #1a181e);
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div64 = styled.div`
  color: var(--Black-12, #1a181e);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div65 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div66 = styled.div`
  background-color: #e6e6e6;
  margin-top: 13px;
  height: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div67 = styled.div`
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-direction: column;
  padding: 14px 12px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div68 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div69 = styled.div`
  justify-content: center;
  align-items: flex-start;
  background-color: var(--Black-100, #fff);
  display: flex;
  width: 151px;
  height: 20px;
  flex-direction: column;
`;

const Div70 = styled.div`
  justify-content: center;
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  padding-right: 60px;
  flex-direction: column;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div71 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  @media (max-width: 991px) {
    margin-right: 2px;
  }
`;

const Div72 = styled.div`
  border-radius: 50%;
  display: flex;
  width: 10px;
  height: 10px;
  flex-direction: column;
  margin: auto 0;
`;

const Div73 = styled.div`
  color: var(--Black-12, #1a181e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div74 = styled.div`
  color: var(--Black-30, #4d4d4d);
  white-space: nowrap;
  justify-content: center;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-right: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div75 = styled.div`
  color: var(--Black-12, #1a181e);
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div76 = styled.div`
  color: var(--Black-12, #1a181e);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div77 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div78 = styled.div`
  background-color: #e6e6e6;
  margin-top: 13px;
  height: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div79 = styled.div`
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-direction: column;
  padding: 14px 12px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div80 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div81 = styled.div`
  justify-content: center;
  align-items: flex-start;
  background-color: var(--Black-100, #fff);
  display: flex;
  width: 151px;
  height: 20px;
  flex-direction: column;
`;

const Div82 = styled.div`
  justify-content: center;
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  padding-right: 60px;
  flex-direction: column;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div83 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  @media (max-width: 991px) {
    margin-right: 2px;
  }
`;

const Div84 = styled.div`
  border-radius: 50%;
  display: flex;
  width: 10px;
  height: 10px;
  flex-direction: column;
  margin: auto 0;
`;

const Div85 = styled.div`
  color: var(--Black-12, #1a181e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div86 = styled.div`
  color: var(--Black-30, #4d4d4d);
  white-space: nowrap;
  justify-content: center;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-right: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div87 = styled.div`
  color: var(--Black-12, #1a181e);
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div88 = styled.div`
  color: var(--Black-12, #1a181e);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div89 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div90 = styled.div`
  background-color: #e6e6e6;
  margin-top: 13px;
  height: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div91 = styled.div`
  background-color: var(--Black-100, #fff);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 12px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div92 = styled.div`
  justify-content: center;
  align-items: flex-start;
  background-color: var(--Black-100, #fff);
  display: flex;
  width: 151px;
  height: 20px;
  flex-direction: column;
`;

const Div93 = styled.div`
  justify-content: center;
  background-color: var(--Black-100, #fff);
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  padding-right: 60px;
  flex-direction: column;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div94 = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  @media (max-width: 991px) {
    margin-right: 2px;
  }
`;

const Div95 = styled.div`
  border-radius: 50%;
  display: flex;
  width: 10px;
  height: 10px;
  flex-direction: column;
  margin: auto 0;
`;

const Div96 = styled.div`
  color: var(--Black-12, #1a181e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/143% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div97 = styled.div`
  color: var(--Black-30, #4d4d4d);
  white-space: nowrap;
  justify-content: center;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-right: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div98 = styled.div`
  color: var(--Black-12, #1a181e);
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div99 = styled.div`
  color: var(--Black-12, #1a181e);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;

const Div100 = styled.div`
  color: var(--Black-30, #4d4d4d);
  text-align: right;
  white-space: nowrap;
  justify-content: center;
  align-items: end;
  background-color: var(--Black-100, #fff);
  flex-grow: 1;
  padding-left: 60px;
  font: 400 14px/143% Galano Grotesque, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 20px;
  }
`;


