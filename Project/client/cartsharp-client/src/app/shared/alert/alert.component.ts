import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

    className = 'alert alert-info';

    /**
     * The type of the alert. This will determine the color of the alert.
     */
    @Input("type")
    _type: AlertType = AlertType.Info;
    public get type(): AlertType {
        return this._type;
    }
    public set type(value: AlertType) {
        this._type = value;

        switch(value) {
            case AlertType.Success:
                this.className = 'alert alert-success';
                break;
            case AlertType.Error:
                this.className = 'alert alert-danger';
                break;
            case AlertType.Info:
                this.className = 'alert alert-info';
                break;
            case AlertType.Warning:
                this.className = 'alert alert-warning';
                break;
        }
    }

}
