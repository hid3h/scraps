export default function Privacy() {
  return (
    <div className="flex justify-center break-all">
      <div className="max-w-screen-sm p-6">
        <h1 className="text-xl font-bold tracking-tight text-gray-900">
          プライバシーポリシー
        </h1>
        <p className="mt-2">
          本サービスにおける、ユーザーについての個人情報を含む利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
        </p>

        <section className="mt-6">
          <h2 className="text-lg mb-2">1. 収集する利用者情報及び収集方法</h2>
          <p className="mt-2">
            本ポリシーにおいて、「利用者情報」とは、ユーザーの識別に係る情報、通信サービス上の行動履歴、その他ユーザーまたはユーザーの端末に関連して生成または蓄積された情報であって、本ポリシーに基づき運営者が収集するものを意味するものとします。
          </p>
          <p className="mt-2">
            本サービスにおいて運営者が収集する利用者情報は、その収集方法に応じて、以下のようなものとなります。
          </p>
          <ol>
            <li className="my-2">
              (1)ユーザーからご提供いただく情報
              <p className="mt-2">
                本サービスを利用するために、または本サービスの利用を通じてユーザーからご提供いただく情報は以下のとおりです。
              </p>
              <ul>
                <li className="my-2">・メールアドレスに関する情報</li>
              </ul>
            </li>
            <li className="my-2">
              (2)
              ユーザーが本サービスの利用において、他のサービスと連携を許可することにより、当該他のサービスからご提供いただく情報
              <p className="mt-2">
                ユーザーが、本サービスを利用するにあたり、ソーシャルネットワーキングサービス等の他のサービスとの連携を許可した場合には、その許可の際にご同意いただいた内容に基づき、以下の情報を当該外部サービスから収集します。
              </p>
              <ul>
                <p className="mt-2">
                  ・当該外部サービスでユーザーが利用するID
                </p>
                <p className="mt-2">
                  ・その他当該外部サービスのプライバシー設定によりユーザーが連携先に開示を認めた情報
                </p>
              </ul>
            </li>
            <li className="my-2">
              (3)ユーザーが本サービスを利用するにあたって、運営者が収集する情報
              <p className="mt-2">
                運営者は、本サービスへのアクセス状況やそのご利用方法に関する情報を収集することがあります。これには以下の情報が含まれます。
              </p>
              <ul>
                <li className="my-2">
                  ・リファラ ・IPアドレス ・サーバーアクセスログに関する情報
                </li>
                <li className="my-2">・Cookie、ADID、IDFAその他の識別子</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">2. 利用目的</h2>
          <p className="mt-2">
            本サービスのサービス提供にかかわる利用者情報の具体的な利用目的は以下のとおりです。
          </p>
          <ol>
            <li className="my-2">
              (1)
              本サービスに関する登録の受付、本人確認、ユーザー認証、ユーザー設定の記録、利用料金の決済計算等本サービスの提供、維持、保護及び改善のため
            </li>

            <li className="my-2">(2) ユーザーのトラフィック測定及び行動測定のため</li>

            <li className="my-2">(3) 広告の配信、表示及び効果測定のため</li>

            <li className="my-2">(4) 本サービスに関するご案内、お問い合わせ等への対応のため</li>

            <li className="my-2">
              (5)
              本サービスに関する運営者の規約、ポリシー等（以下「規約等」といいます。）に違反する行為に対する対応のため
            </li>

            <li className="my-2">(6) 本サービスに関する規約等の変更などを通知するため</li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">
            3. 外部送信、第三者提供、情報収集モジュールの有無
          </h2>
          <p className="mt-2">
            本サービスでは、以下の提携先が、ユーザーの端末にCookieを保存し、これを利用して利用者情報を蓄積及び利用している場合があります。
          </p>
          <p className="mt-2">・Google</p>
          <p className="mt-2">
            プライバシーポリシー:{" "}
            <a
              className="text-indigo-600 hover:text-indigo-500"
              href="https://policies.google.com/technologies/ads?gl=jp"
              target="_blank"
            >
              https://policies.google.com/technologies/ads?gl=jp
            </a>
          </p>
          <p className="mt-2">
            オプトアウト:{" "}
            <a
              className="text-indigo-600 hover:text-indigo-500"
              href="https://tools.google.com/dlpage/gaoptout?hl=ja"
              target="_blank"
            >
              https://tools.google.com/dlpage/gaoptout?hl=ja
            </a>
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">4. 第三者提供</h2>
          <p className="mt-2">
            運営者は、利用者情報のうち、個人情報については、あらかじめユーザーの同意を得ないで、第三者（日本国外にある者を含みます。）に提供しません。但し、次に掲げる必要があり第三者（日本国外にある者を含みます。）に提供する場合はこの限りではありません。
          </p>
          <ol>
            <li className="py-2">
              (1)
              運営者が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合
            </li>
            <li className="py-2">
              (2)
              合併その他の事由による事業の承継に伴って個人情報が提供される場合
            </li>
            <li className="py-2">
              (3)
              第4項の定めに従って、提携先または情報収集モジュール提供者へ個人情報が提供される場合
            </li>
            <li className="py-2">
              (4)
              国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合
            </li>
            <li className="py-2">
              (5)
              その他、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の法令で認められる場合
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">5. 個人情報の訂正及び利用停止等</h2>
          <ol>
            <li className="py-2">
              5-1
              運営者は、ユーザーから、(1)個人情報が真実でないという理由によって個人情報保護法の定めに基づきその内容の訂正を求められた場合、及び(2)あらかじめ公表された利用目的の範囲を超えて取扱われているという理由または偽りその他不正の手段により収集されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止を求められた場合には、ユーザーご本人からのご請求であることを確認の上で遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正または利用停止を行い、その旨をユーザーに通知します。なお、訂正または利用停止を行わない旨の決定をしたときは、ユーザーに対しその旨を通知いたします。
            </li>
            <li className="py-2">
              5-2
              運営者は、ユーザーから、ユーザーの個人情報について消去を求められた場合、運営者が当該請求に応じる必要があると判断した場合は、ユーザーご本人からのご請求であることを確認の上で、個人情報の消去を行い、その旨をユーザーに通知します。
            </li>
            <li className="py-2">
              5-3
              個人情報保護法その他の法令により、運営者が訂正等または利用停止等の義務を負わない場合は、5-1および5-2の規定は適用されません。
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">6. お問い合わせ窓口</h2>
          <p className="mt-2">
            <a
              className="text-indigo-600 hover:text-indigo-500"
              href="https://docs.google.com/forms/d/e/1FAIpQLScxFpltCzyFZeQNmPK618KcknKX5pst4DtKt0oTV5ZUzbed-A/viewform?usp=sf_link"
              target="_blank"
            >
              https://docs.google.com/forms/d/e/1FAIpQLScxFpltCzyFZeQNmPK618KcknKX5pst4DtKt0oTV5ZUzbed-A/viewform?usp=sf_link
            </a>
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg mb-2">7. プライバシーポリシーの変更手続</h2>
          <p className="mt-2">
            運営者は、必要に応じて、本ポリシーを変更します。但し、法令上ユーザーの同意が必要となるような本ポリシーの変更を行う場合、変更後の本ポリシーは、運営者所定の方法で変更に同意したユーザーに対してのみ適用されるものとします。なお、運営者は、本ポリシーを変更する場合には、変更後の本ポリシーの施行時期及び内容を運営者のウェブサイト上での表示その他の適切な方法により周知し、またはユーザーに通知します。
          </p>
        </section>

        <section className="mt-6">
          <p className="mt-2">2023年12月01日制定</p>
        </section>
      </div>
    </div>
  );
}
