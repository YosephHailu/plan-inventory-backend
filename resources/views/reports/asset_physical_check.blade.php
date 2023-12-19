<table>
    <thead>
        <tr>
            <th colspan="14">
                <div style="display: inline">
                    <img src="{{public_path('/logo.png')}}" alt="" srcset="">
                    <div>
                        <h1 style="font-size: 20px; font-weight: 900">Asset Physical Check Report</h1>
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
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Checked At</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Condition</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Checked By</b></th>
            <th style="background-color: #0072ce; color: white; text-align: center; width: 120px"><b>Remark</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($physicalChecks as $physicalCheck)
        <tr style="background-color: red
        ">
            <td style="text-align: center">{{ $physicalCheck->asset->tag_number ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->acquisition_date ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->asset_type ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->item_name ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->description ?? "" }}</td>
            <td style="text-align: center">
                @if($physicalCheck->asset->assetCustodians()->exists() && $physicalCheck->asset->available)
                {{ $physicalCheck->asset->assetCustodians()->where('returned', '!=', null)->first()->staff->name ?? "" }}
                @else
                Not Assigned
                @endif
            </td>
            <td style="text-align: center">{{ $physicalCheck->asset->serial_no ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->accessories ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->acquisition_cost ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->currency->code ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->depreciation_date ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->acquisitionType->name ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->purchase_order_no ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->project->name ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->gsrn_no ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->receipt_date ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->donor->name ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->project->name ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->programArea->name ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->asset->costCenter->name ?? "" }}</td>

            <td style="text-align: center">{{ $physicalCheck->checked_at ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->condition->name ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->checkedBy->name ?? "" }}</td>
            <td style="text-align: center">{{ $physicalCheck->remark ?? "" }}</td>
        </tr>
        @endforeach
    </tbody>
</table>


<style>
    th {
        background-color: blue;
    }
</style>