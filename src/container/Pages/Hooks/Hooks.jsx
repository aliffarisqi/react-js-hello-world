import React, {Component, useState, useEffect} from "react"
import "./Hooks.css"

// class HooksCuy extends Component {
//     state = {
//         count: 0,
//         title: document.title
//     }
//     onChange = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     componentDidMount() {
//         document.title = `Title change : ${this.state.count}`
//     }
//     componentDidUpdate() {
//         document.title = `Title change : ${this.state.count}`
//     }
//     componentWillUnmount() {
//         document.title = `${this.state.title}`
//     }
//     render() {
//         return (
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini : {this.state.count}</p>
//                 <hr />
//                 <button onClick={this.onChange}>Update Nilai Saya</button>
//             </div>
//         )
//     }
// }

const HooksCuy = () => {
	const [count, setCount] = useState(0)
	useEffect(() => {
		document.title = `Title change : ${count}`
		return () => {
			document.title = `React First`
		}
	})
	return (
		<div className="p-hooks">
			<p>Nilai saya saat ini : {count} </p>
			<hr />
			<button onClick={() => setCount(count + 1)}>Update Nilai Saya</button>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corrupti consequatur unde nihil adipisci odit cum facilis ad voluptates nostrum voluptas, voluptate recusandae voluptatibus itaque blanditiis mollitia expedita qui. Dolor hic odio sit quaerat similique, sed modi facere dolores voluptate vero quos eligendi impedit a quia nam temporibus inventore! Nemo ullam nulla voluptas animi debitis officiis tenetur, unde, rerum odio magni facere veritatis sequi a atque delectus! Perferendis enim dolores minus quibusdam, vel accusamus temporibus ab incidunt tempore mollitia, natus dolore aliquid. Tempora eum voluptatem voluptas numquam vel dignissimos omnis vitae quibusdam qui minus amet quis quidem velit, at doloremque deleniti! Consequatur dolorem possimus itaque doloremque, aperiam incidunt voluptate voluptatum aspernatur suscipit culpa nesciunt perferendis perspiciatis reprehenderit repudiandae mollitia quaerat aliquam illum quo voluptas placeat soluta quisquam! Quam esse
				illum earum explicabo asperiores unde distinctio culpa nihil molestias itaque nesciunt vero ipsum magni consequatur, pariatur quisquam neque exercitationem suscipit fugit enim optio, voluptas porro debitis voluptatum? Fuga nisi, repudiandae hic molestiae corrupti totam minus sed, quae, debitis provident dolores animi possimus inventore culpa blanditiis! Ducimus mollitia non dolore excepturi deleniti ullam labore hic error repudiandae, eaque ea reiciendis tempora similique voluptates corporis quos consequatur libero, quo doloribus explicabo nemo ipsam assumenda earum. Fugiat dignissimos incidunt laborum, laboriosam perspiciatis quibusdam optio natus sint deleniti inventore ea impedit nihil veniam repellat unde. Debitis voluptatum, tempore provident expedita, dicta laboriosam repellat ut asperiores enim consequatur impedit placeat laborum, voluptatem libero fugiat cupiditate pariatur suscipit aut. Sequi est vel perspiciatis quaerat, beatae eveniet at sed qui omnis saepe fugiat
				corrupti optio voluptatibus enim similique distinctio accusamus deleniti veniam assumenda earum possimus. Impedit, laboriosam. Aliquam expedita, adipisci incidunt recusandae quis eaque tempora suscipit, perspiciatis vero repellat, saepe sequi necessitatibus laboriosam quasi? Debitis, quae ad facilis nostrum quo deserunt est vel harum obcaecati, in nam placeat et nihil id, quasi at earum tempora iure! Praesentium error quas blanditiis voluptas minus quasi vel repellendus atque quibusdam! Et asperiores, laborum aspernatur labore iusto quam blanditiis vero, earum eum eius necessitatibus sequi obcaecati eos? Asperiores voluptates voluptate expedita velit eaque? Impedit debitis accusamus accusantium corrupti consequuntur distinctio iure minus neque. Asperiores necessitatibus porro eaque aliquid perspiciatis ducimus quasi earum, explicabo voluptatem itaque provident totam eos aperiam iure ipsa reiciendis ullam aut facilis, eum quos qui repellat. In, expedita. Voluptatem tempora optio
				enim iste aspernatur officia dolores numquam perferendis consequuntur necessitatibus, cumque ad asperiores fuga ipsam aliquam quod. Itaque, modi, qui accusamus iure assumenda earum rem dolorem et excepturi repellendus, ea illum porro vitae. Similique ratione at sit molestiae aliquid a velit suscipit consectetur. Natus provident fugiat voluptatum alias at exercitationem debitis impedit fugit soluta voluptate doloremque, consectetur repellat eveniet quo? Itaque reiciendis in fuga distinctio, sunt illum quas perferendis officia est doloremque, dolorem accusamus impedit quam repellendus, deserunt sapiente cupiditate. Maxime, amet. Ex ratione placeat, inventore unde, voluptatum dicta cumque repellat saepe deleniti architecto quam tenetur rerum vitae autem eaque! Perspiciatis dolore ex iusto ratione cum asperiores facere maiores quam neque minima. Blanditiis suscipit quia nostrum, laudantium voluptatem illo, obcaecati doloremque ea quae nam dolores animi, quasi esse corrupti unde.
				Soluta tempore itaque temporibus nemo unde ab sed ratione sequi illum expedita! Esse veritatis maiores voluptates illum tempore eaque mollitia quia est odio quidem unde rerum consequatur nobis iste autem ad quo nostrum, nesciunt asperiores delectus molestiae quasi! Corrupti explicabo consequuntur laborum, magni blanditiis in nisi veniam vero nobis hic eos modi maiores corporis, possimus pariatur iure accusantium consectetur assumenda, rem expedita maxime non. Iusto labore ipsam vero corrupti ducimus quaerat odio consequuntur commodi consectetur molestias amet illum ut repudiandae eius debitis totam quibusdam repellat et, aspernatur tempore dolorem sapiente hic quia. Incidunt earum rem eius deleniti rerum numquam fugit pariatur cumque. Perferendis, doloremque dolores fugit autem quod quam nobis quo ratione provident veritatis minima obcaecati voluptas voluptate nulla totam. Suscipit quaerat labore in sequi, commodi magni inventore repudiandae. Dolores officiis et delectus. Eaque
				officiis obcaecati inventore numquam similique dolorum nam voluptate. Iusto quidem rerum repudiandae sunt temporibus obcaecati, ex quas repellendus incidunt voluptatem dicta. Consequuntur cupiditate sequi vero, aspernatur animi aperiam sapiente voluptate sunt. Doloribus unde suscipit nesciunt reprehenderit vero tenetur sapiente iusto veniam consectetur, dolor, natus esse repellendus pariatur commodi eligendi recusandae explicabo quaerat at dignissimos nostrum earum in aperiam? Earum nemo soluta eos provident porro eaque neque, laborum est sequi ipsum autem deleniti velit fugit similique. Minus quaerat debitis corrupti aspernatur, quae delectus praesentium distinctio esse molestiae voluptatum, accusantium, similique consectetur sapiente totam. Esse sunt, obcaecati nostrum repellendus fugit temporibus hic dicta eum similique error. Mollitia error blanditiis dignissimos dolorem, esse maiores soluta ducimus delectus iusto quam ipsa? Velit, officiis! Laudantium enim eos eius
				voluptatum maiores sapiente! Molestias ex fuga omnis at. Omnis eligendi, reiciendis quisquam sit voluptatibus magni fuga at voluptatem qui accusamus vel officia iusto blanditiis repudiandae officiis consequuntur quidem sapiente asperiores ut nesciunt id. Laudantium eum nobis sapiente voluptatibus, cum laboriosam debitis non, neque maxime veniam similique architecto iure omnis voluptas voluptates repellat vitae laborum ut ex ratione natus corrupti. Cumque debitis nisi numquam dolorum quam inventore, fuga maiores nihil totam quae sunt fugit sit ratione officia, alias eveniet asperiores rerum voluptatem omnis dolore minus nobis cupiditate illo. Reprehenderit saepe odio blanditiis natus minus ducimus. Sequi incidunt tempore magnam amet voluptates veniam consequatur rerum. Eaque quod animi accusantium quas, cum commodi odit voluptates corrupti consectetur nesciunt earum blanditiis in facere dolorum aspernatur tenetur totam mollitia enim, sapiente consequatur! Vitae error amet
				corrupti, maxime natus laborum ipsum non eligendi distinctio expedita earum perferendis ad quas ullam dolorem explicabo cumque exercitationem, illo quibusdam. Corporis corrupti commodi nihil eaque sequi, veritatis aspernatur quasi doloremque, possimus voluptatibus assumenda? In consequatur consectetur officiis sequi tempore quisquam quis deleniti, magni eos neque non distinctio nostrum, ducimus ut. Tenetur placeat tempora deleniti. Officia omnis ipsam quod maxime ea nemo, culpa id, natus dolorum tempora ab mollitia soluta laudantium perspiciatis facilis repellat nulla. Labore pariatur provident aut eaque, fuga quis nulla assumenda nemo blanditiis error voluptatibus expedita suscipit? Exercitationem tempore facere minima quis at reprehenderit vero sapiente doloribus! Sapiente, nemo. Enim.
			</p>
		</div>
	)
}
export default HooksCuy
