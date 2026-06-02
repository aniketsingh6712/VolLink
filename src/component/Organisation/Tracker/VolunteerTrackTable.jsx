import {
FiEye
} from "react-icons/fi";

export default function VolunteerTrackerTable({
data,
onView
}){

return(

<div className="bg-white rounded-3xl mt-8 overflow-hidden border">

<table className="w-full">

<thead>

<tr className="border-b">

<th className="p-6 text-left">
Volunteer
</th>

<th>
Check-in
</th>

<th>
Check-out
</th>

<th>
Hours
</th>

<th>
Status
</th>

<th>
Actions
</th>

</tr>

</thead>

<tbody>

{data.map((v)=>(

<tr
key={v.id}
className="border-b"
>

<td className="p-6">

<div className="flex gap-4">

<img
src={v.avatar}
className="w-14 h-14 rounded-full"
/>

<div>

<p className="font-semibold">
{v.name}
</p>

<p className="text-sm text-gray-500">
{v.email}
</p>

</div>

</div>

</td>

<td>
{v.checkin}
</td>

<td>

{
v.checkout||
"Pending"
}

</td>

<td>

{v.hours}h

</td>

<td>

<span
className={`
px-3
py-1
rounded-full

${
v.status==="ACTIVE"
?
"bg-green-100 text-green-700"
:
"bg-blue-100 text-blue-700"
}
`}
>

{
v.status==="ACTIVE"
?
"● Active"
:
"Checked Out"
}

</span>

</td>

<td>

<button
onClick={()=>
onView(v)
}
>

<FiEye/>

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}