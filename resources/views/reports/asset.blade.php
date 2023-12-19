<table>
    <thead>
        <tr>
            <th colspan="14">
                <div style="display: inline">
                    <img src="{{public_path('/logo.png')}}" alt="" srcset="">
                    <div>
                        <h1 style="font-size: 20px; font-weight: 900">Asset Report</h1>
                    </div>
                </div>
            </th>
        </tr>
        <tr class="blue darken-2">
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Tag Number</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Acquisition
                    Date</b>
            </th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Asset Type</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Item</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Description</b>
            </th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Assignee</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Serial/ Vin No</b>
            </th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Accessories</b>
            </th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Acquisition
                    Cost</b>
            </th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Currency</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Depreciation
                    Date</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Acquisition
                    Type</b>
            </th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Purchase Order
                    No</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b> Project </b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>GSRN No</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Receipt Date</b>
            </th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Donor</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Project</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Physical
                    Location</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Cost Center</b>
            </th>
        </tr>
    </thead>
    <tbody>
        @foreach($assets as $asset)
        <tr style="background-color: red
        ">
            <td style="text-align: center">{{ $asset->tag_number ?? "" }}</td>
            <td style="text-align: center">{{ $asset->acquisition_date ?? "" }}</td>
            <td style="text-align: center">{{ $asset->asset_type ?? "" }}</td>
            <td style="text-align: center">{{ $asset->item_name ?? "" }}</td>
            <td style="text-align: center">{{ $asset->description ?? "" }}</td>
            <td style="text-align: center">
                @if($asset->assetCustodians()->exists() && $asset->available)
                {{ $asset->assetCustodians()->where('returned', '!=', null)->first()->staff->name ?? "" }}
                @else
                Not Assigned
                @endif
            </td>
            <td style="text-align: center">{{ $asset->serial_no ?? "" }}</td>
            <td style="text-align: center">{{ $asset->accessories ?? "" }}</td>
            <td style="text-align: center">{{ $asset->acquisition_cost ?? "" }}</td>
            <td style="text-align: center">{{ $asset->currency->code ?? "" }}</td>
            <td style="text-align: center">{{ $asset->depreciation_date ?? "" }}</td>
            <td style="text-align: center">{{ $asset->acquisitionType->name ?? "" }}</td>
            <td style="text-align: center">{{ $asset->purchase_order_no ?? "" }}</td>
            <td style="text-align: center">{{ $asset->project->name ?? "" }}</td>
            <td style="text-align: center">{{ $asset->gsrn_no ?? "" }}</td>
            <td style="text-align: center">{{ $asset->receipt_date ?? "" }}</td>
            <td style="text-align: center">{{ $asset->donor->name ?? "" }}</td>
            <td style="text-align: center">{{ $asset->project->name ?? "" }}</td>
            <td style="text-align: center">{{ $asset->programArea->name ?? "" }}</td>
            <td style="text-align: center">{{ $asset->costCenter->name ?? "" }}</td>
        </tr>
        @endforeach
    </tbody>
</table>


<style>
    th {
        background-color: blue;
    }
</style>