function Modal({ setOpenModal, setCheck }) {
  return (
    <div className="w-screen h-screen fixed flex justify-center items-center text-black">
      <div className="modalContainer w-[500px] h-[600px] sm:w-[1000px] sm:h-[600px]">
        <div className="bg-gray-300 justify-between flex items-center py-4 px-2">
          <h5 className="text-center flex justify-between text-4xl font-semibold">AGREEMENT</h5>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className=""
          >
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div class="overflow-y-auto p-4 text-black">
        <h5 className="text-center text-xl font-semibold">MUTUAL NON-DISCLOSURE AGREEMENT</h5>
          <p className="py-2">
            This MUTUAL NON-DISCLOSURE AGREEMENT (this “Agreement”) is entered
            into as of 11 Feb, 2024(the “Effective Date”) by and between Luxuri
            Lending LLC., a Florida limited liability company, and ______.
            WHEREAS, in connection with the evaluation of one or more possible
            business transactions between the Parties(the “Transactions”), the
            Disclosing Party may reveal certain Confidential Information(as
            defined below) to the Receiving Party; and WHEREAS, the Disclosing
            Party considers its Confidential Information to be proprietary and
            requires certain assurances from the Receiving Party as a condition
            to disclosing Confidential Information. NOW, THEREFORE, in
            consideration of the mutual covenants contained herein and other
            good and valuable consideration the receipt and sufficiency of which
            is hereby acknowledged,the Parties hereto hereby agree as follows:
          </p>

          <p className="py-2">
            1. Parties. For the purposes of this Agreement, the “Disclosing
            Party” shall mean the party who discloses Confidential
            Information(as defined below) and each of its entities, officers,
            directors, shareholders, members, managers, agents, representatives,
            affiliates, employees, predecessors, successors and assigns, and the
            “Receiving Party” shall mean the party who receives Confidential
            Information and each of its officers, directors, shareholders,
            members, managers, agents, representatives, affiliates, employees,
            predecessors, successors and assigns. Disclosing Party and Receiving
            Party are each known herein as a “Party” and, collectively, as the
            “Parties.”
          </p>

          <p className="py-2">
            2. Confidential Information. As used herein, “Confidential
            Information” shall mean any and all technical and non - technical
            information provided by the Disclosing Party to the Receiving Party,
            whether orally or in writing, related to the business and current,
            future and proposed projects and services of the Disclosing Party,
            and including without limitation: (a) patent and patent
            applications; (b) trade secrets; (c) proprietary and confidential
            information, ideas, techniques, sketches, drawings, works of
            authorship, know - how, technical data, models, inventions, know
            how, processes, apparatuses, equipment, developments and formulae
            related to the current, future, and proposed products and services
            of the Disclosing Party, such as information concerning research,
            experimental work, development, design details and specifications,
            engineering, financial information, procurement requirements,
            purchasing, manufacturing, customer lists, investors, employees,
            business and contractual relationships, business forecasts, sales
            and merchandising, and marketing plans; and(d) all other information
            that the Receiving Party knew, or reasonably should have known, was
            the Confidential Information of the Disclosing Party.
          </p>

          <p>
            3. Non - Disclosure. The Receiving Party agrees that at all times it
            will hold in strict confidence and not disclose to any third party
            Confidential Information, except as expressly permitted by the
            Disclosing Party, and will use the Confidential Information for no
            purpose except to evaluate the Transactions with the Disclosing
            Party. Confidential Information shall not be reproduced in any form
            except as required to accomplish the intent of this Agreement. Any
            reproduction of any Confidential Information by Receiving Party
            shall remain the property of the Disclosing Party and shall contain
            any and all confidential or proprietary notices or legends that
            appear on the original, unless otherwise authorized in writing by
            the Disclosing Party. The Receiving Party shall immediately notify
            the Disclosing Party upon discovery of any loss or unauthorized
            disclosure of the Confidential Information. The Receiving Party
            shall not utilize the Confidential Information provided by the
            Disclosing Party in any manner to compete with the Disclosing Party
            or to derive any advantages in its own business or affairs. Upon
            written request of the Disclosing Party, the Receiving Party shall
            promptly return to the Disclosing Party other all documents and
            other tangible materials representing the Disclosing Party’s
            Confidential Information and all copies thereof.
          </p>

          <p className="py-2">
            4. Protection of Confidential Information. The Receiving Party
            agrees to utilize its reasonable best efforts and take all such
            steps as may be reasonably necessary to prevent any Confidential
            Information that is disclosed to the Receiving Party by the
            Disclosing Party, from being revealed to any person or entity other
            than those to whom the Disclosing Party has authorized the Receiving
            Party in writing to disclose such Confidential Information. In the
            event the Receiving Party becomes aware of any misappropriation or
            misuse by any person or entity of any Confidential Information, the
            Receiving Party shall immediately advise the Disclosing Party.
          </p>

          <p className="py-2">
            5. No Reverse Engineering. The Receiving Party shall not modify,
            reverse engineer, create other works from or disassemble any
            products contained in the Confidential Information of the Disclosing
            Party unless permitted in writing by the Disclosing Party.
          </p>

          <p className="py-2">
            6. Exclusions. Confidential Information does not include information
            which: (a) is or becomes generally available to the public other
            than as a result of disclosure by the Receiving Party(or any person
            to whom the Receiving Party disclosed such information); (b) was
            known by the Receiving Party prior to its disclosure by the
            Disclosing Party; (c) was independently developed by Receiving Party
            without use of the Confidential Information; (d) becomes available
            to the Receiving Party on a non - confidential basis from a source
            other than the Disclosing Party, provided that such source is not
            bound by a confidentiality agreement, confidentiality obligation or
            fiduciary duty which prohibits disclosure and the Receiving Party
            has no reason to believe that such source may be restricted from
            making such disclosure; or(e) was disclosed in response to a valid
            order by a court or other governmental body, provided that the
            Receiving Party provided the Disclosing Party with prior written
            notice of such disclosure in order to permit the Disclosing Party to
            seek confidential treatment of the Confidential Information.
          </p>

          <p className="py-2">
            7. Term. This Agreement will continue in effect until terminated by
            either Party upon written notice. In the event of termination of
            this Agreement, the Receiving Party’s non - disclosure obligations
            as set forth herein shall continue for five(5) years from the date
            of termination, except with regard to trade secrets of the
            Disclosing Party, which shall be held in confidence for as long as
            such information remains a trade secret.
          </p>

          <p className="py-2">
            8. Ownership; No License. All Confidential Information(including,
            without limitation, all copies, extracts and portions thereof) is
            and shall remain the sole property of the Disclosing Party. The
            Parties recognize and agree that nothing contained in this Agreement
            shall be construed as granting any property rights, by license or
            otherwise, to any Confidential Information of the Disclosing Party
            pursuant to this Agreement, or to any invention or any patent,
            copyright, trademark, or other intellectual property right that has
            issued or that may issue, based on such Confidential Information.
            The Receiving Party shall not make, have made, use or sell for any
            purpose any product or other item using, incorporating or derived
            from any Confidential Information of the Disclosing Party.
          </p>

          <p className="py-2">
            9. No Obligation. Nothing in this Agreement shall obligate the
            Disclosing Party to disclose any Confidential Information or either
            Party to proceed with any Transaction, and each Party reserves the
            right, in its sole discretion, to terminate the discussions
            contemplated by this Agreement.
          </p>

          <p className="py-2">
            10. Governing Law; Venue and Jurisdiction. This Agreement shall be
            governed by and construed in accordance with the laws of the State
            of California applicable therein. The Parties hereby agree to the
            exclusive personal jurisdiction and venue of the courts of Los
            Angeles County, California. In case of a dispute arising from this
            Agreement, the prevailing Party shall be awarded its reasonable
            attorneys’ fees and costs.
          </p>

          <p className="py-2">
            11. Amendments. This Agreement may not be amended or modified except
            by a writing signed by both Parties.
          </p>

          <p className="py-2">
            12. Injunctive Relief. The Receiving Party acknowledges that in the
            event of a breach of this Agreement by the Receiving Party,
            substantial injury could result to the Disclosing Party and money
            damages will not be a sufficient remedy for such breach. Therefore,
            in the event that the Receiving Party or its representatives engage
            in, or threaten to engage in any act which violates any provision of
            this Agreement, the Disclosing Party shall be entitled, in addition
            to all other remedies which may be available to it under law, to
            injunctive relief(including, without limitation, temporary
            restraining orders, or preliminary or permanent injunctions) and
            specific enforcement of the terms of this Agreement. The Disclosing
            Party shall not be required to post a bond or other security in
            connection with the granting of any such relief.
          </p>

          <p className="py-2">
            13. Invalidity. If any provision of this Agreement is found by a
            proper authority to be unenforceable or invalid, such
            unenforceability or invalidity shall not render this Agreement
            unenforceable or invalid as a whole and in such event, such
            provision shall be changed and interpreted so as to best accomplish
            the objectives of such unenforceable or invalid provision within the
            limits of applicable law or applicable court decisions.
          </p>

          <p className="py-2">
            14. Notice. All notices, requests, consents and demands shall be
            made in writing to either Party at their respective addresses set
            forth in the signature page of this Agreement or to such address as
            may be furnished in writing to the other Party. Notices and payments
            required hereunder shall be deemed properly given: (i) upon personal
            delivery to the Party to be notified; (ii) when sent, if sent by
            facsimile or electronic mail, during normal business hours of the
            recipient, and if not sent during normal business hours, then on the
            recipient’s next business day; (iii) three(3) business days after
            mailing by first class, certified mail, postage prepaid and
            addressed to the Party to be notified at the address indicated for
            such Party in this Agreement or at such other address as such Party
            may designate by advance written notice to the other Party; or(iv)
            next day delivery by guaranteed overnight delivery, which delivery
            is confirmed.
          </p>

          <p className="py-2">
            15. Entire agreement; No Assignments. This Agreement supersedes all
            prior or contemporaneous negotiations, communications and
            agreements, whether oral or written, between the Parties and
            constitutes the entire agreement between the Parties with respect to
            the subject matter hereof. No modification or amendment of this
            Agreement shall be effective unless it is in writing and signed by
            both Parties. Neither Party will assign or transfer any rights or
            obligations under this Agreement without the prior written consent
            of the other Party.
          </p>

          <p className="py-2">
            16. No Presumption. This Agreement shall be construed as to its fair
            meaning and shall not be construed for or against the Party drafting
            this Agreement or its provisions.
          </p>
          <p className="py-2">
            17. Counterparts. This Agreement may be executed in counterparts
            each of which so executed shall be deemed to be an
            original(including electronic copies) and such counterparts shall
            together constitute one and the same agreement.
          </p>
          <p className="py-2">
            IN WITNESS WHEREOF, the Parties hereto have executed this Mutual Non
            - Disclosure Agreement as of the Effective Date.
          </p>
        </div>
        <div className="flex justify-center items-center py-4">
          <button
            onClick={() => {
              setOpenModal(false);
              setCheck(true);
            }}
            className="bg-black text-white px-10 py-2 rounded-lg"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
