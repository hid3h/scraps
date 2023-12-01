import { SITE_TITLE } from "../constant";

export default async function Terms() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-sm p-6">
        <h1 className="text-xl font-bold tracking-tight text-gray-900">
          利用規約
        </h1>

        <section className="mt-6">
          <p>
            本利用規約（以下「本規約」と言います。）には、本サービスの提供条件及び運営者と登録ユーザーの皆様との間の権利義務関係が定められています。本サービスの利用に際しては、本規約の全文をお読みいただいたうえで、本規約に同意いただく必要があります。
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第1条（適用）</h2>
          <ol>
            <li className="py-2">
              本規約は、本サービスの提供条件及び本サービスの利用に関する運営者と登録ユーザーとの間の権利義務関係を定めることを目的とし、登録ユーザーと運営者との間の本サービスの利用に関わる一切の関係に適用されます。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第2条（定義）</h2>
          <p>
            本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。
          </p>
          <ol>
            <li className="py-2">
              (1)
              「サービス利用契約」とは、本規約を契約条件として運営者と登録ユーザーの間で締結される、本サービスの利用契約を意味します。
            </li>
            <li className="py-2">
              (2)
              「知的財産権」とは、著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）を意味します。
            </li>
            <li className="py-2">
              (3)
              「投稿データ」とは、登録ユーザーが本サービスを利用して投稿その他送信するコンテンツ（文章、画像、動画その他のデータを含みますがこれらに限りません。）を意味します。
            </li>
            <li className="py-2">
              (4) 「運営者」とは、個人( https://twitter.com/_hid3
              )を意味します。
            </li>
            <li className="py-2">
              (5)
              「運営者ウェブサイト」とは、そのドメインが「scrap-board.com」である、運営者が運営するウェブサイト（理由の如何を問わず、運営者のウェブサイトのドメインまたは内容が変更された場合は、当該変更後のウェブサイトを含みます。）を意味します。
            </li>
            <li className="py-2">
              (6)
              「登録ユーザー」とは、第3条（登録）に基づいて本サービスの利用者としての登録がなされた個人または法人を意味します。
            </li>
            <li className="py-2">
              (7) 「本サービス」とは、運営者が提供する【{SITE_TITLE}
              】という名称のサービス（理由の如何を問わずサービスの名称または内容が変更された場合は、当該変更後のサービスを含みます。）を意味します。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第3条（登録）</h2>
          <ol>
            <li className="py-2">
              1.
              本サービスの利用を希望する者（以下「登録希望者」といいます。）は、本規約を遵守することに同意し、かつ運営者の定める一定の情報（以下「登録事項」といいます。）を運営者の定める方法で運営者に提供することにより、運営者に対し、本サービスの利用の登録をすることができます。
            </li>
            <li className="py-2">
              3.
              前項に定める登録の完了時に、サービス利用契約が登録ユーザーと運営者の間に成立し、登録ユーザーは本サービスを本規約に従い利用することができるようになります。
            </li>
            <li className="py-2">
              4.
              運営者は、登録申請者が、以下の各号のいずれかの事由に該当する場合は、登録及び再登録を拒否することがあり、またその理由について一切開示義務を負いません。
            </li>
            <ol>
              <li className="py-2">
                (1)
                運営者に提供した登録事項の全部または一部につき虚偽、誤記または記載漏れがあった場合
              </li>
              <li className="py-2">
                (2)
                反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると運営者が判断した場合
              </li>
              <li className="py-2">
                (3)
                過去運営者との契約に違反した者またはその関係者であると運営者が判断した場合
              </li>
              <li className="py-2">
                (4) 第9条に定める措置を受けたことがある場合
              </li>
              <li className="py-2">
                (5) その他、登録を適当でないと運営者が判断した場合
              </li>
            </ol>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第4条（登録事項の変更）</h2>
          <p>
            登録ユーザーは、登録事項に変更があった場合、運営者の定める方法により当該変更事項を遅滞なく運営者に通知するものとします
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">
            第5条（パスワード及びユーザーIDの管理）
          </h2>
          <ol>
            <li className="py-2">
              1.
              登録ユーザーは、自己の責任において、本サービスに関するパスワード及びユーザーIDを適切に管理及び保管するものとし、これを第三者に利用させ、または貸与、譲渡、名義変更、売買等をしてはならないものとします。
            </li>
            <li className="py-2">
              2.
              パスワードまたはユーザーIDの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任は登録ユーザーが負うものとします。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第6条（禁止事項）</h2>
          <p>
            登録ユーザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為または該当すると運営者が判断する行為をしてはなりません。
          </p>
          <ol>
            <li className="py-2">
              (1) 法令に違反する行為または犯罪行為に関連する行為
            </li>
            <li className="py-2">
              (2)
              運営者、本サービスの他の利用者またはその他の第三者に対する詐欺または脅迫行為
            </li>
            <li className="py-2">(3) 公序良俗に反する行為</li>
            <li className="py-2">
              (4)
              運営者、本サービスの他の利用者またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為
            </li>
            <li className="py-2">
              (5)
              本サービスを通じ、以下に該当し、または該当すると運営者が判断する情報を運営者または本サービスの他の利用者に送信すること
              <ul>
                <li className="py-2">
                  ・過度に暴力的または残虐な表現を含む情報
                </li>
                <li className="py-2">
                  ・コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報
                </li>
                <li className="py-2">
                  ・運営者、本サービスの他の利用者またはその他の第三者の名誉または信用を毀損する表現を含む情報
                </li>
                <li className="py-2">
                  ・過度にわいせつな表現を含む情報
                  ・差別を助長する表現を含む情報
                </li>
                <li className="py-2">
                  ・自殺、自傷行為を助長する表現を含む情報
                </li>
                <li className="py-2">
                  ・薬物の不適切な利用を助長する表現を含む情報
                </li>
                <li className="py-2">・反社会的な表現を含む情報</li>
                <li className="py-2">
                  ・チェーンメール等の第三者への情報の拡散を求める情報
                </li>
                <li className="py-2">・他人に不快感を与える表現を含む情報</li>
              </ul>
            </li>
            <li className="py-2">
              (6)
              本サービスのネットワークまたはシステム等に過度な負荷をかける行為
            </li>
            <li className="py-2">
              (7)
              運営者が提供するソフトウェアその他のシステムに対するリバースエンジニアリングその他の解析行為
            </li>
            <li className="py-2">
              (8) 本サービスの運営を妨害するおそれのある行為
            </li>
            <li className="py-2">
              (9) 運営者のネットワークまたはシステム等への不正アクセス
            </li>
            <li className="py-2">(10) 第三者に成りすます行為</li>
            <li className="py-2">
              (11) 本サービスの他の利用者のIDまたはパスワードを利用する行為
            </li>
            <li className="py-2">
              (12)
              運営者が事前に許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
            </li>
            <li className="py-2">(13) 本サービスの他の利用者の情報の収集</li>
            <li className="py-2">
              (14)
              運営者、本サービスの他の利用者またはその他の第三者に不利益、損害、不快感を与える行為
            </li>
            <li className="py-2">(15) 反社会的勢力等への利益供与</li>
            <li className="py-2">
              (16) 面識のない異性との出会いを目的とした行為
            </li>
            <li className="py-2">
              (17) 前各号の行為を直接または間接に惹起し、または容易にする行為
            </li>
            <li className="py-2">(18) 前各号の行為を試みること</li>
            <li className="py-2">(19) その他、運営者が不適切と判断する行為</li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第7条（本サービスの停止等）</h2>
          <ol>
            <li className="py-2">
              本サービスに係るコンピューター・システムの点検または保守作業を緊急に行う場合
            </li>
            <li className="py-2">
              コンピューター、通信回線等の障害、誤操作、過度なアクセスの集中、不正アクセス、ハッキング等により本サービスの運営ができなくなった場合
            </li>
            <li className="py-2">
              地震、落雷、火災、風水害、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合
            </li>
            <li className="py-2">
              その他、運営者が停止または中断を必要と判断した場合
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第8条（権利帰属）</h2>
          <ol>
            <li className="py-2">
              1.
              利用者が、本サービス上に投稿その他の方法で送信したコンテンツ（静止画、動画、文字情報その他一切の情報）に関する著作権（著作権法第27条及び同第28条に規定する権利を含む全ての著作権を含む。）については利用者あるいはその権利者に留保されるものとします。
            </li>
            <li className="py-2">
              2.
              登録ユーザーは、投稿データについて、自らが投稿その他送信することについての適法な権利を有していること、及び投稿データが第三者の権利を侵害していないことについて、運営者に対し表明し、保証するものとします。
            </li>
            <li className="py-2">
              3.
              登録ユーザーは、運営者及び運営者から権利を承継しまたは許諾された者に対して著作者人格権を行使しないことに同意するものとします。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第9条（登録抹消等）</h2>
          <ol>
            <li className="py-2">
              1.
              運営者は、登録ユーザーが、以下の各号のいずれかの事由に該当する場合は、事前に通知または催告することなく、投稿データを削除もしくは非表示にし、当該登録ユーザーについて本サービスの利用を一時的に停止し、または登録ユーザーとしての登録を抹消することができます。
              <ol>
                <li className="py-2">
                  (1)本規約のいずれかの条項に違反した場合
                </li>
                <li className="py-2">
                  (2)登録事項に虚偽の事実があることが判明した場合
                </li>
                <li className="py-2">
                  (3)運営者からの問い合わせその他の回答を求める連絡に対して30日間以上応答がない場合
                </li>
                <li className="py-2">(4)第3条第4項各号に該当する場合</li>
                <li className="py-2">
                  (5)その他、運営者が本サービスの利用または登録ユーザーとしての登録の継続を適当でないと判断した場合
                </li>
              </ol>
            </li>
            <li className="py-2">
              2.
              前項各号のいずれかの事由に該当した場合、登録ユーザーは、運営者に対して負っている債務の一切について当然に期限の利益を失い、直ちに運営者に対して全ての債務の支払を行わなければなりません。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第10条（退会）</h2>
          <ol>
            <li className="py-2">
              1.
              登録ユーザーは、運営者所定の手続の完了により、本サービスから退会し、自己の登録ユーザーとしての登録を抹消することができます。
            </li>
            <li className="py-2">
              退会にあたり、運営者に対して負っている債務が有る場合は、登録ユーザーは、運営者に対して負っている債務の一切について当然に期限の利益を失い、直ちに運営者に対して全ての債務の支払を行わなければなりません。
            </li>
            <li className="py-2">
              退会後の利用者情報の取扱いについては、第14条の規定に従うものとします。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">
            第11条（本サービスの内容の変更、終了）
          </h2>
          <ol>
            <li className="py-2">
              1.
              運営者は、運営者の都合により、本サービスの内容を変更し、または提供を終了することができます。
            </li>
            <li className="py-2">
              2.
              本サービスを終了する場合、本ウェブサイト上で告知するものとし、登録ユーザーに事前に通知する義務を負わないものとします。
            </li>
            <li className="py-2">
              3.
              運営者は、本サービスの終了に伴い利用者に生じる損害または不利益について責任を負いません。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第12条（保証の否認及び免責）</h2>
          <ol>
            <li className="py-2">
              1.
              運営者は、本サービスが登録ユーザーの特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、登録ユーザーによる本サービスの利用が登録ユーザーに適用のある法令または業界団体の内部規則等に適合すること、継続的に利用できること、及び不具合が生じないことについて、明示又は黙示を問わず何ら保証するものではありません。
            </li>
            <li className="py-2">
              2.
              運営者は、本サービスに関して登録ユーザーが被った損害につき、付随的損害、間接損害、特別損害、将来の損害及び逸失利益にかかる損害については、賠償する責任を負わないものとします。
            </li>
            <li className="py-2">
              3.
              本サービスまたは運営者ウェブサイトに関連して登録ユーザーと他の登録ユーザーまたは第三者との間において生じた取引、連絡、紛争等については、登録ユーザーが自己の責任によって解決するものとします。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第13条（秘密保持）</h2>
          <p>
            登録ユーザーは、本サービスに関連して運営者が登録ユーザーに対して秘密に取扱うことを求めて開示した非公知の情報について、運営者の事前の書面による承諾がある場合を除き、秘密に取扱うものとします。
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第14条（利用者情報の取扱い）</h2>
          <ol>
            <li className="py-2">
              運営者による登録ユーザーの利用者情報の取扱いについては、別途運営者プライバシーポリシー（https://scrap-board.com/privacy）の定めによるものとし、登録ユーザーはこのプライバシーポリシーに従って運営者が登録ユーザーの利用者情報を取扱うことについて同意するものとします。
            </li>
            <li className="py-2">
              運営者は、登録ユーザーが運営者に提供した情報、データ等を、個人を特定できない形での統計的な情報として、運営者の裁量で、利用及び公開することができるものとし、登録ユーザーはこれに異議を唱えないものとします。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第15条（本規約等の変更）</h2>
          <p>
            運営者は、運営者が必要と認めた場合は、本規約を変更できるものとします。本規約を変更する場合、変更後の本規約の施行時期及び内容を運営者ウェブサイト上での掲示その他の適切な方法により周知し、または登録ユーザーに通知します。但し、法令上登録ユーザーの同意が必要となるような内容の変更の場合は、運営者所定の方法で登録ユーザーの同意を得るものとします。
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第16条（連絡／通知）</h2>
          <ol>
            <li className="py-2">
              1.
              本サービスに関する問い合わせその他登録ユーザーから運営者に対する連絡または通知、及び本規約の変更に関する通知その他運営者から登録ユーザーに対する連絡または通知は、運営者の定める方法で行うものとします。
            </li>
            <li className="py-2">
              2.
              運営者が登録事項に含まれるメールアドレスその他の連絡先に連絡または通知を行った場合、登録ユーザーは当該連絡または通知を受領したものとみなします。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">
            第17条（サービス利用契約上の地位の譲渡等）
          </h2>
          <ol>
            <li className="py-2">
              1.
              登録ユーザーは、運営者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。
            </li>
            <li className="py-2">
              2.
              運営者は本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びに登録ユーザーの登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、登録ユーザーは、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第18条（分離可能性）</h2>
          <p>
            本規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">第19条（準拠法及び管轄裁判所）</h2>
          <ol>
            <li className="py-2">
              1. 本規約及びサービス利用契約の準拠法は日本法とします。
            </li>
            <li className="py-2">
              2.
              本規約またはサービス利用契約に起因し、または関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <p>2023年12月01日制定</p>
        </section>
      </div>
    </div>
  );
}
