<table>
    <thead>
        <tr>
            <th colspan="14">
                <div style="display: inline">
                    <img src="{{public_path('/logo.png')}}" alt="" srcset="">
                    <div>
                        <h1 style="font-size: 20px; font-weight: 900">Stock On Hand Report</h1>
                    </div>
                </div>
            </th>
        </tr>
        <tr class="blue darken-2">
            <th style="background-color: #0072ce; color: white; width: 70px"> <b>Bin Card/Stock Card Number</b></th>
            <th style="background-color: #0072ce; color: white; width: 150px"> <b>Lot No (Location Label)</b></th>
            <th style="background-color: #0072ce; color: white; width: 150px"> <b>Stock Type</b></th>
            <th style="background-color: #0072ce; color: white; width: 150px"> <b>Category</b></th>
            <th style="background-color: #0072ce; color: white; width: 220px"> <b>Item</b></th>
            <th style="background-color: #0072ce; color: white; width: 220px"> <b>Item Description</b></th>
            <th style="background-color: #0072ce; color: white; width: 100px"> <b>Balance</b></th>
            <th style="background-color: #0072ce; color: white; width: 100px"> <b>Batch Number</b></th>
            <th style="background-color: #0072ce; color: white; width: 100px"> <b>Expiration Date</b></th>
            <th style="background-color: #0072ce; color: white; width: 150px"> <b>Project/ Department</b></th>
            <th style="background-color: #0072ce; color: white; width: 100px"> <b>Donor</b></th>
            <th style="background-color: #0072ce; color: white; width: 220px"> <b>Note</b></th>
            <th style="background-color: #0072ce; color: white; width: 50px"> <b>Verified Quantity</b></th>
            <th style="background-color: #0072ce; color: white; width: 220px"> <b>Verification Remark</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($goodReceiveItems as $goodReceiveItem)
        <tr>
            <td style="text-align: center">{{ $goodReceiveItem->id }}</td>
            <td style="text-align: center">{{ $goodReceiveItem->goodReceive->loading_number ?? "" }}</td>
            <td style="text-align: center">{{ $goodReceiveItem->stockType->name ?? "" }}</td>
            <td style="text-align: center">{{ $goodReceiveItem->goodReceive->itemCategory->name ?? "" }}</td>
            <td style="text-align: center">{{ $goodReceiveItem->item->name ?? "" }}</td>
            <td style="text-align: center">{{ $goodReceiveItem->description ?? "" }}</td>
            <td style="text-align: center"> {{ $goodReceiveItem->balance_due }} {{
                $goodReceiveItem->unitOfMeasurement->abbreviation ?? "" }}</td>
            <td style="text-align: center">{{ $goodReceiveItem->goodReceive->batch_number ?? "" }}</td>
            <td style="text-align: center">{{ $goodReceiveItem->expiry_date ?? "" }}</td>
            <td style="text-align: center">
                {{ $goodReceiveItem->project->name ?? "" }}
            </td>
            <td style="text-align: center">{{ $goodReceiveItem->donor->name ?? "" }}</td>
            <td style="text-align: center">{{ $goodReceiveItem->comment ?? "" }}</td>
            <td style="text-align: center">{{ $goodReceiveItem->stockVerification->quantity ?? "" }}</td>
            <td style="text-align: center">{{ $goodReceiveItem->stockVerification->remarks ?? "" }}</td>
        </tr>
        @endforeach
    </tbody>
</table>


<style>
    th {
        background-color: blue;
    }
</style>