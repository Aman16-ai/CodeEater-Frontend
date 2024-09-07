import { Component } from '@angular/core';
import { Language, SubmissionPayload } from '../../interfaces';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  languages: Language[] = [
    { name: 'JavaScript', code: 93 },
    { name: 'Python', code: 92 },
    { name: 'Cpp', code: 52 },
  ];
  submissionsPayload: SubmissionPayload = {
    preferredCodeLanguage: 93,
    standardInput: '',
    sourceCode: '',
  };
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

  output: string = '';
  loading:boolean = false
  constructor(private apiService: ApiService) {}

  getlanguageName() {
    const names = [];
    for (const l of this.languages) {
      names.push(l.name);
    }
    return names;
  }

  getCodeOfSelectedOption(option: string): number {
    for (const l of this.languages) {
      if (l.name === option) {
        return l.code;
      }
    }
    return -1;
  }
  getSelectedOption(option: string) {
    this.editorOptions = {
      ...this.editorOptions,
      language: option.toLowerCase(),
    };
    console.log(this.editorOptions);
    const code = this.getCodeOfSelectedOption(option);
    this.submissionsPayload = {
      ...this.submissionsPayload,
      preferredCodeLanguage: code,
    };
  }

  setStandardInput(event: Event) {
    const inputElement = event.target as HTMLTextAreaElement;
    const input = inputElement.value;
    this.submissionsPayload = {
      ...this.submissionsPayload,
      standardInput: input,
    };

    console.log(this.submissionsPayload);
  }

  submit() {
    this.submissionsPayload = {
      ...this.submissionsPayload,
      sourceCode: this.code,
    };
    console.log('final payload', this.submissionsPayload);
    this.loading = true
    this.apiService
      .postSubmission('submission/', this.submissionsPayload)
      .subscribe((res) => {
        this.loading = false
        this.output = res.stdout || "something went wrong"
      });
  }

  reset() {
    this.code = '';
    this.output=''
  }
}
